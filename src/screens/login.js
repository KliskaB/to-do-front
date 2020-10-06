import React from 'react'
import { Formik, Form } from 'formik';
import SharedInput from '../components/shared-input';
import { useDispatch } from 'react-redux';
import { login } from '../store/user/actions';

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
            {({ errors, touched, values }) => (
                <Form>
                    <SharedInput labelName="Username" inputKey="username" errors={errors} touched={touched} />
                    <SharedInput labelName="Password" inputKey="password" errors={errors} touched={touched} />
                    <button type="submit">Log in</button>  
                </Form>
            )}
            </Formik>
     </div>
    )
}

export default Login;