import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, HashRouter } from "react-router-dom";
import Login from "./screens/login";
import UserDashboard from "./screens/user-dashboard";
import { history } from "./history";
import Register from "./screens/register";
import { ROUTES } from "./constants";
import { useDispatch } from "react-redux";
import { getUser } from "./store/user/actions";
import ToDoItemDetails from "./screens/to-do-item-details";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    let accessToken = localStorage.getItem("access-token");
    if (accessToken) {
      dispatch(getUser());
    }
  });

  return (
    <HashRouter history={history}>
      <div className="App"></div>
      <Switch>
        <Route path={ROUTES.LOGIN}>
          <Login />
        </Route>
        <Route path={ROUTES.TODO_ITEM + `/:todoId`}>
          <ToDoItemDetails />
        </Route>
        <Route path={ROUTES.REGISTER}>
          <Register />
        </Route>
        <Route exact path={ROUTES.DASHBOARD}>
          <UserDashboard />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
