import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToDoByIdSelector } from "../store/to-do/selectors";
import { Formik, Form, Field } from "formik";
import SharedInput from "../components/shared-input";
import { useDispatch } from "react-redux";
import { deleteToDoItem, getToDo, editToDoItem } from "../store/to-do/actions";
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
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <div> Item details </div>
          <Formik
            initialValues={{
              title: selected.title || "",
              description: selected.description || "",
              priority: selected.priority || "",
              complited: selected.complited || false,
            }}
            enableReinitialize
            onSubmit={(values) => {
              const id = selected.id;
              const data = { id, ...values };
              dispatch(editToDoItem(data));
            }}
          >
            {({ props }) => (
              <Form>
                <SharedInput labelName="Title" inputKey="title" {...props} />
                <SharedInput
                  labelName="Description"
                  inputKey="description"
                  type="text"
                  {...props}
                />
                <div>
                  <label>Priority</label>
                </div>
                <div>
                  <Field name="priority" as="select" {...props}>
                    <option value="L" label="Low" />
                    <option value="M" label="Medium" />
                    <option value="H" label="High" />
                  </Field>
                </div>
                <SharedInput
                  labelName="Complited"
                  inputKey="complited"
                  type="checkbox"
                  {...props}
                />
                <button type="submit">Edit</button>
                <button onClick={deleteItem} type="button">
                  Delete
                </button>
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
