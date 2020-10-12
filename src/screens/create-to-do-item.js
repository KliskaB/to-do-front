import React from "react";
import { Formik, Form, Field } from "formik";
import { createToDoItem } from "../store/to-do/actions";
import { useSelector } from "react-redux";
import { userSelector } from "../store/user/selectors";
import SharedInput from "../components/shared-input";
import { useDispatch } from "react-redux";

const CreateToDoItemForm = () => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  return (
    <div>
      {user ? (
        <div>
          <div> Create To-do item </div>
          <Formik
            initialValues={{
              title: "",
              description: "",
              priority: "L",
              complited: false,
            }}
            enableReinitialize
            onSubmit={(values) => {
              dispatch(createToDoItem(values));
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
                <button type="submit">Create</button>
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

export default CreateToDoItemForm;
