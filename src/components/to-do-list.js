import React from "react";
import ToDoItem from "./to-do-item";

const ToDoList = ({ toDoList, ...props }) => {
  return (
    <div>
      {toDoList.map((item) => {
        return <ToDoItem toDoItem={item} key={item.id} />;
      })}
    </div>
  );
};

export default ToDoList;
