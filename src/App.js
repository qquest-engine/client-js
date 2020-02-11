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
const quests = [
  {
    "id": 1,
    "accessTime": "15.11.2019",
    "author": "OLGA",    
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/11/2019-rolls-royce-cullinan-side.jpg",
    "isPublic": true,
    "name": "QuestEngine 1",
    "type": "auto"
  },
  {
    "id": 3,
    "accessTime": '15.11.2019',
    "author": 0,    
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/12/01-2018-cadillac-CTS-sedan-oem.jpg",
    "isPublic": true,
    "name": "QuestEngine 2",
    "type": "auto"
  },
  {
    "id": 3,
    "accessTime": '15.11.2019',
    "author": 0,    
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/11/2019-rolls-royce-cullinan-side.jpg",
    "isPublic": true,
    "name": "QuestEngine 3",
    "type": "photo"
  },
  {
    "id": 4,
    "accessTime": '15.11.2019',
    "author": 0,    
    "description": "string",
    "difficulty": 0,
    "imageLink": "https://www.kbb.com/articles/wp-content/uploads/2019/12/01-2018-cadillac-CTS-sedan-oem.jpg",
    "isPublic": true,
    "name": "QuestEngine 4",
    "type": "online"
  }
]
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quests: [],
      isLogged: false,
      user: null,
      types: initialTypes,
      search: '',
      activeTab: 'info'
    };
  }
  onLoginInner = (user) => {
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
  onTab = tab => {
      this.setState({
        activeTab: tab
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

  componentDidUpdate(prevProps, prevState) {
   if (this.state.type !== prevState.type) {
        CallApi.get('/quests?' + this.getQueryString(), {
        }).then(resp => resp.json()).then(data => {console.log(data); 
              this.setState({
            quests: data
          })
        });      
    }
  }
filteredQuests() {
  let filteredList = [];
  let arr = '';
  Object.entries(this.state.types).forEach(item => {
    if (item[1]) arr+= `${item[0]},`
  });
  if (arr.length) {arr = arr.slice(0,-1);}
  arr = arr.split(',');
  if (this.state.quests.length) {
    filteredList = this.state.quests.filter(i => arr.includes(i.type))
  }

  return filteredList;
}
  render() {
    const {isLogged, user, quests} = this.state;
    return (
     <Router>
      <Header types={this.state.types}  search={this.state.search} onCheck={this.onCheck} onViewAll={this.onViewAll} onChange={this.onChange} onSearch={this.onSearch} />    
      <div className="wrapper">
        <Sidebar isLogged={isLogged} user={user} onLoginInner={this.onLoginInner} onLogout={this.onLogout} activeTab={this.state.activeTab} onTab={this.onTab} /> 
        <main className="main">
          <Switch>
            <Route path="/quest/:id" component={Quest} />
            <Route path="/question/:id" component={Question} />
            <Route path="/rules/" component={Rules} />
            <Route path="/how2play/" component={How2Play} />
            <Route path="/" component={() => <Quests quests={quests} />} />
            /*<Route path="/" component={() => <Quests quests={this.filteredQuests()} />} />*/
          </Switch>
        </main>
      </div>
    </Router>
    )
  }
}

export default App;
