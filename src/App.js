import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './screens/home'
import Login from './screens/login'

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
          <Route path="/users/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
