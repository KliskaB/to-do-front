import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './screens/home'
import Login from './screens/login'
import UserDashboard from './screens/user-dashboard';

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Switch>
          <Route path="/users/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user-dashboard">
            <UserDashboard />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
