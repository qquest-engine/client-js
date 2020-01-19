import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// pages
import Home from './pages/home/index';
import Quest from './pages/quest/index';
import Rules from './pages/rules/index';
import How2Play from './pages/how2play/index';
import Question from './pages/question/index';
// components
import Header from "./components/Header";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
//styles
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
    };
  }
  render() {
    return (
     <Router>
      <Header isLogged={this.state.isLogged} />
      <div className="wrapper">
        <Navbar isLogged={this.state.isLogged} />
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
