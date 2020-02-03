import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CallApi from "./api/api";
import { Link } from "react-router-dom";

// pages
import Quests from './pages/quests/index';
import Quest from './pages/quest/index';
import Rules from './pages/rules/index';
import How2Play from './pages/how2play/index';
import Question from './pages/question/index';
// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
//styles
import './App.scss';

const initialTypes = {
  auto: true,
  online: false,
  photo: false
}
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quests: [],
      isLogged: false,
      user: null,
      types: initialTypes,
      search: ''
    };
  }
  onLogin = (user) => {
        this.setState({
          isLogged: true,
          user
        });
  }
  onLogout = (user) => {
        this.setState({
          isLogged: true,
          user
        });
  }
  getQueryString = () => {
    let str = '';
    str+= 'type=';
    let arr = '';
    Object.entries(this.state.types).forEach(item => {
      if (item[1]) arr+= `${item[0]},`
    });
    if (arr.length) {str = str + arr; str = str.slice(0,-1);}

    str+= '&search=' + this.state.search.split(' ').join('+');
    console.log('get query string', str);
    return str;
  }
  onCheck = event => {
    const newValues = {
      ...this.state.types,
      [event.target.name]: event.target.checked
    };
      this.setState({
        types: newValues
      });     
 };

  onChange = event => {
    this.setState({
      search: event.target.value
    });
    console.log('event.target.value', event.target.value);
  };

  onSearch = () => {
      CallApi.get('/quests?' + this.getQueryString(), {
      }).then(resp => resp.json()).then(data => {console.log(data); 
            this.setState({
          quests: data
        })
      }); 
  };

  onViewAll = event => {
      this.setState({
        types: {
          auto: true,
          online: true,
          photo: true
        }
      });     
  }
  componentDidMount = () => {
    if (window.localStorage.getItem("jwt")) {
      CallApi.get("/users")
        .then(resp => resp.json())
        .then(user => this.onLoginInner(user))   
    }
    let url = "/quests?" + this.getQueryString();
    CallApi.get(url, {mode: 'cors'})
    .then(resp => resp.json())
    .then(data => {
      console.log('quests / home', data);
      this.setState({
        quests: data
      });
    });
    console.log('newValues',this.state);    
  }

  componentDidUpdate(prevState) {
   if (this.state.types !== prevState.types) {
        CallApi.get('/quests?' + this.getQueryString(), {
        }).then(resp => resp.json()).then(data => {console.log(data); 
              this.setState({
            quests: data
          })
        });      
    }
  }

  render() {
    const {isLogged, user, quests} = this.state;
    return (
     <Router>
      <Header types={this.state.types}  search={this.state.search} onCheck={this.onCheck} onViewAll={this.onViewAll} onChange={this.onChange} onSearch={this.onSearch} />    
      <div className="wrapper">
        <Sidebar isLogged={isLogged} user={user} onLogin={this.onLogin} onLogout={this.onLogout} />    
        <main className="main">
          <Switch>
            <Route path="/quest/:id" component={Quest} />
            <Route path="/question/:id" component={Question} />
            <Route path="/rules/" component={Rules} />
            <Route path="/how2play/" component={How2Play} />
            <Route path="/" component={() => <Quests quests={quests} />} />
          </Switch>
        </main>
      </div>
    </Router>
    )
  }
}

export default App;
