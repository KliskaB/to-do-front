import React from 'react'
import { Formik, Form } from 'formik';
import SharedInput from '../components/shared-input';

const Login = () => {
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
                // same shape as initial values
                console.log(values);
            }}
            >
            {({ errors, touched }) => (
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