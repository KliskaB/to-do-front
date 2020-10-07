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
import Register from './screens/register';
import { ROUTES } from './constants';

function App() {

  return (
    <HashRouter history={history}>
      <div className="App">
      </div>
      <Switch>
          <Route path={ROUTES.LOGIN}>
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={ROUTES.DASHBOARD}>
            <UserDashboard />
          </Route>
          <Route path={ROUTES.REGISTER}>
            <Register />
          </Route>
        </Switch>
    </HashRouter>
  );
}

export default App;
