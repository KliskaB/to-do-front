import React from 'react'
import { Formik, Form } from 'formik';
import SharedInput from '../components/shared-input';
import { useDispatch } from 'react-redux';
import { register } from '../store/user/actions';

const Register = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Register</h1>
            <Formik
            initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                username: '',
                password: '',
            }}
            onSubmit={values => {
                dispatch(register({
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    username: values.username,
                    password: values.password
                }));
            }}
            >
            {({ props }) => (
                <Form>
                    <SharedInput labelName="First name" inputKey="first_name" {...props} />
                    <SharedInput labelName="Last name" inputKey="last_name" {...props} />
                    <SharedInput labelName="Email" inputKey="email" {...props} />
                    <SharedInput labelName="Username" inputKey="username" {...props} />
                    <SharedInput labelName="Password" inputKey="password" type="password" {...props} />
                    <button type="submit">Register</button>  
                </Form>
            )}
            </Formik>
     </div>
    )
}

export default Register;