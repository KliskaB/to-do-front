import React from 'react';
import './App.css';
import {
  Switch,
  Route, HashRouter
} from "react-router-dom";
import Home from './screens/home';
import Login from './screens/login';
import UserDashboard from './screens/user-dashboard';
import { history } from './history';

function App() {

  return (
    <HashRouter history={history}>
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
    </HashRouter>
  );
}

export default App;
