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
