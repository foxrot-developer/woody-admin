import React from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import Field from '../Shared/Field';
import Button from '../Shared/Button';
import logo from '../Assets/Images/woody-logo.png';
import '../Assets/CSS/login.css';

const Login = () => {

    const validValues = {
        email: '',
        password: ''
    };

    const errorSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const loginFormHandler = (data) => {
        console.log({ data });
    };

    return (
        <div className='container login d-flex align-items-center justify-content-center'>
            <div className='row border border-1 rounded p-5 login-section'>
                <div className='col-xs-12 col-md-6 d-flex align-items-center justify-content-center'>
                    <img src={logo} alt="Logo" className='img-fluid' />
                </div>
                <div className='col-xs-12 col-md-6'>
                    <h2 className='heading my-3'>ADMIN LOGIN</h2>
                    <Formik
                        initialValues={validValues}
                        validationSchema={errorSchema}
                        onSubmit={loginFormHandler}
                    >
                        {(formik) => (
                            <React.Fragment>
                                <Form>
                                    <Field label='Email' name='email' type='email' />
                                    <Field label='Password' name='password' type='password' />
                                    <Button type='submit'>
                                        Login
                                    </Button>
                                </Form>
                            </React.Fragment>
                        )}
                    </Formik>
                </div>
            </div>
        </div>

    )
}

export default Login;
