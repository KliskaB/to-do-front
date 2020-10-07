import React from 'react'
import { Formik, Form } from 'formik';
import SharedInput from '../components/shared-input';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/actions';
import { Link } from "react-router-dom";
import { ROUTES } from '../constants';

const Login = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Log in</h1>
            <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            //validationSchema={}
            onSubmit={values => {
                dispatch(login({
                    username: values.username,
                    password: values.password
                }));
            }}
            >
            {({ props }) => (
                <Form>
                    <SharedInput labelName="Username" inputKey="username" {...props} />
                    <SharedInput labelName="Password" inputKey="password" type="password" {...props} />
                    <button type="submit">Log in</button>  
                    <div>
                        <Link to={ROUTES.REGISTER}>Don't have an account? Create it.</Link>
                    </div>
                </Form>
            )}
            </Formik>
     </div>
    )
}

export default Login;