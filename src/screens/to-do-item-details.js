import React from "react";
import { useSelector } from "react-redux";
import { toDoSelector } from "../store/to-do/selectors";
import { Formik, Form } from "formik";
import SharedInput from "../components/shared-input";
import { useDispatch } from "react-redux";
import { deleteToDoItem } from "../store/to-do/actions";

const ToDoItemDetails = () => {
  const path = window.location.href;
  const lastIndexOfBS = path.lastIndexOf("/");
  const itemId = path.slice(lastIndexOfBS + 1);
  const todos = useSelector(toDoSelector);
  let selected = null;
  const selectItem = () => {
    todos.map((todo) => {
      if (todo.id.toString() === itemId) {
        selected = todo;
      }
    });
  };
  selectItem();

  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteToDoItem(selected.id));
  };

  return (
    <div>
      {selected && (
        <div>
          <div> details </div>
          <p>{selected.title}</p>
          <Formik
            initialValues={{
              title: selected.title,
              description: selected.description,
              priority: selected.priority,
              complited: selected.complited,
            }}
            //onSubmit={}
          >
            {({ props }) => (
              <Form>
                <SharedInput labelName="Title" inputKey="title" {...props} />
                <SharedInput
                  labelName="Description"
                  inputKey="description"
                  {...props}
                />
                <SharedInput
                  labelName="Priority"
                  inputKey="priority"
                  {...props}
                />
                <SharedInput
                  labelName="Complited"
                  inputKey="complited"
                  {...props}
                />
                <button type="submit">Edit</button>
                <button onClick={deleteItem}>Delete</button>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
};

export default ToDoItemDetails;
