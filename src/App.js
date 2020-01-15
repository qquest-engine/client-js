import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// components
import Home from './pages/home/index';
import Quest from './pages/quest/index';
//styles
import './App.scss';


function App() {
  return (
     <Router>
      <header className="header">header</header>
      <div className="wrapper">
      <aside className="aside">Quest</aside>
      <aside className="aside">Engine</aside>
      <main class="main">
        <Switch>
          <Route path="/quest/:id" component={Quest} />
          <Route path="/" component={Home} />
        </Switch>
      </main>
      </div>
    </Router>
  );
}

export default App;
