import React from "react";
import { history } from "../history";
import { ROUTES } from "../constants";

const ToDoItem = ({ toDoItem }) => {
  return (
    <div>
      <p>
        {toDoItem.title}
        <button
          onClick={() => {
            history.push(ROUTES.TODO_ITEM + `/${toDoItem.id}`);
          }}
        >
          Details
        </button>
      </p>
    </div>
  );
};

export default ToDoItem;
