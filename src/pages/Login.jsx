import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './styles/Login.css';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import UserAuthContext from '../context/UserAuthContext';

const Login = () => {
    const navigate = useNavigate();
    const {setEmail, setIsLoggedIn} =useContext(UserAuthContext)

    const initialValues = {
        email: '',
        password: ''
    };

    
    const validationSchema = Yup.object({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    const handleSubmit =(values, { setSubmitting }) =>{
        console.log("values", values);
        setSubmitting(false); 
        
        setEmail(values.email);
        setIsLoggedIn(true)
        navigate("/");
    }
    // const handleLogin = (values) =>{
    //     setEmail(values.email);
    //     setIsLoggedIn(true)
    //     navigate("/");
    // }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        
                        <Field type="text" id="email" name="email" placeholder="Enter your email" className="inputField" />
                        
                        <ErrorMessage name="email"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <Field type="password" id="password" name="password" placeholder="Enter your password" className="inputField"/>
                        <ErrorMessage name="password"  />
                    </div>
                    <button type="submit" className='loginBtn'>Login</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Login;
