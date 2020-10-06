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
            {({ errors, touched }) => (
                <Form>
                    <SharedInput labelName="First name" inputKey="first_name" errors={errors} touched={touched} />
                    <SharedInput labelName="Last name" inputKey="last_name" errors={errors} touched={touched} />
                    <SharedInput labelName="Email" inputKey="email" errors={errors} touched={touched} />
                    <SharedInput labelName="Username" inputKey="username" errors={errors} touched={touched} />
                    <SharedInput labelName="Password" inputKey="password" errors={errors} touched={touched} />
                    <button type="submit">Register</button>  
                </Form>
            )}
            </Formik>
     </div>
    )
}

export default Register;