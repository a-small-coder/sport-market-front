import React from 'react';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import FormikControl from './BaseComponents/FormikControl';
import { Form, Formik } from 'formik';


function LoginForm(props) {
    const checkBoxOptions = [
        {key: 'Запомнить меня', value: 'rememberMe', chebox_value: false,},
    ]

    const initialValues = {
        username: '',
        password: '',
        rememberMe: true,
    }

    const validation = Yup.object({
        username: Yup.string().required('Поле "Логин" обязательно для заполнения.'),
        password: Yup.string().required('Поле "Пароль" обязательно для заполнения.')
    })

    const onSubmit = (values, helpers) =>{
        const data = {...values, rememberMe: values.rememberMe.length > 0}
        props.handlerSubmit(data, helpers.setFieldError, 'password')
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange}) => {
                    
                    return (
                        <Form className="authForm loginForm" autoComplete="off" >
                            <div className="authForm__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Логин' 
                                    name='username'
                                    fieldClassName="auth_input"
                                    placeholder="Логин"
                                    standartOnBlur={handleBlur}
                                    isError={errors.username && touched.username}
                                />
                                <FormikControl 
                                    control='input' 
                                    type="password" 
                                    label='Пароль' 
                                    name='password' 
                                    fieldClassName="auth_input"
                                    placeholder="Пароль"
                                    standartOnBlur={handleBlur}
                                    isError={errors.password && touched.password}
                                />
                                
                                <Link 
                                    to="/restore-password" 
                                    className="authForm__password-link  _text-link _icon-search"
                                >
                                    <span>Забыли пароль?</span>
                                </Link>

                                {/* <FormikControl
                                    control="checkbox"
                                    name="rememberMe"
                                    options={checkBoxOptions}
                                    checkboxValue={values.rememberMe}
                                    standartOnChange={handleChange}
                                    isError={errors.rememberMe}
                                    wrapperClassName={"form-control checkbox-block"}
                                /> */}

                                <Link 
                                    to="/user-manual" 
                                    className="authForm__user-manual  _text-link"
                                >
                                    <span>Руководство пользователя</span>
                                </Link>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    )

}

export default LoginForm;