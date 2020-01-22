import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CallApi from "./api/api";

// pages
import Home from './pages/home/index';
import Quest from './pages/quest/index';
import Rules from './pages/rules/index';
import How2Play from './pages/how2play/index';
import Question from './pages/question/index';
// components
import Filters from "./components/Filters";
import Search from "./components/Search";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
//styles
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: true,
      types: {
        auto: true,
        online: false,
        photo: false
      },
      queryString: '',
      search: '',
      author: ''
    };
  }

  onCheck = event => {
    const newValues = {
      ...this.state.types,
      [event.target.name]: event.target.checked
    };
    console.log(newValues);
    this.setState({
      types: newValues
    });
    let str = '';
    Object.entries(this.state.types).forEach(item => {
      if (item[1]) str+= `${item[0]},`
    });
    str = str.slice(0,-1);
        CallApi.get(`/quests?type=${str}&search=${this.state.search}&author=${this.state.author}`, {
        }).then(resp => console.log(resp));
  };

  onChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  render() {
    return (
     <Router>
      <header className="header">
        <div className="logo1">Quest</div>
        <div className="logo2">Engine</div>
        <Filters types={this.state.types} onCheck={this.onCheck} />
        <Search search={this.state.search} onChange={this.onChange} />
      </header>
      <div className="wrapper">
        <Navbar isLogged={this.state.isLogged} queryStr={this.state.queryStr} />
        <Route path="/" exact component={Auth} />
        <main className="main">
          <Switch>
            <Route path="/quest/:id" component={Quest} />
            <Route path="/question/:id" component={Question} />
            <Route path="/rules/" component={Rules} />
            <Route path="/how2play/" component={How2Play} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
    )
  }
}

export default App;
