import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToDoByIdSelector } from "../store/to-do/selectors";
import { Formik, Form } from "formik";
import SharedInput from "../components/shared-input";
import { useDispatch } from "react-redux";
import { deleteToDoItem, getToDo } from "../store/to-do/actions";
import { useParams } from "react-router-dom";
import { userSelector } from "../store/user/selectors";

const ToDoItemDetails = () => {
  let { todoId } = useParams();
  let selected = useSelector(getToDoByIdSelector(todoId));
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteToDoItem(selected.id));
  };

  useEffect(() => {
    dispatch(getToDo(todoId));
  }, []);

  return (
    <div>
      {user ? (
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
            enableReinitialize
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
      ) : (
        <div>You are not logged in.</div>
      )}
    </div>
  );
};

export default ToDoItemDetails;
