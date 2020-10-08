import React, { useEffect } from "react";
import { userSelector } from "../store/user/selectors";
import { toDoSelector } from "../store/to-do/selectors";
import { useSelector } from "react-redux";
import { history } from "../history";
import { ROUTES } from "../constants";
import { useDispatch } from "react-redux";
import { toDoList } from "../store/to-do/actions";
import ToDoList from "../components/to-do-list";

const UserDashboard = () => {
  const user = useSelector(userSelector);
  const todos = useSelector(toDoSelector);
  const dispatch = useDispatch();

  const logout = () => {
    localStorage.clear();
    history.push(ROUTES.LOGIN);
  };

  useEffect(() => {
    dispatch(toDoList());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <p>User dashboard</p>
      {user && (
        <div>
          <p>{user.username}</p>
          <ToDoList toDoList={todos} />
          <button onClick={logout}>Log out</button>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
