import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss';
import Home from './pages/home/index';
import Quest from './pages/quest/index';

function App() {
  return (
     <Router>
        <Switch>
          <Route path="/quest">
            <Quest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
