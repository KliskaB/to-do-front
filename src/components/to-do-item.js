import React from "react";

const ToDoItem = ({ toDoItem }) => {
  return (
    <div>
      <p>
        {" "}
        {toDoItem.title}
        <button>Details</button>
      </p>
    </div>
  );
};

export default ToDoItem;
