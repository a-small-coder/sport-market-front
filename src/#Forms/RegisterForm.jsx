import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import FormikControl from './BaseComponents/FormikControl';
function RegisterForm(props) {
    const checkBoxOptions = [
        {
            key: 'Я даю согласие на ', 
            value: 'confirmUserData',
            chebox_value: true,
            link: {
                text: "обработку персональных данных", 
                ref: "/personal-conversations"
            }
        },
    ]
    const initialValues = {
        firstName: '',
        secondName: '',
        fatherName: '',
        email: '',
        password: '',
        confirm_password: '' ,
        acceptTermAndConditions: true,
    }

    const validation = Yup.object({
        firstName: Yup.string().required('Поле "Имя" обязательно для заполнения.'),
        secondName: Yup.string().required('Поле "Фамилия" обязательно для заполнения.'),
        fatherName: Yup.string(),
        email: Yup.string()
            .email('Неверный формат почтового адреса')
            .required('Поле "Email" обязательно для заполнения.'),
        password: Yup.string()
            .required('Поле "Пароль" обязательно для заполнения.')
            .min(6, "Пароль должен содержать 6 или более символов")
            .max(25, "Пароль не может содержать более 24 символов"),
        confirm_password: Yup.string().oneOf([Yup.ref('password'), ''], 'Пароли не совпадают.').required('Подтвердите пароль.'),
        acceptTermAndConditions: Yup.array().min(1,"Необходимо подтвердить согласие на обработку персональных данных"),
    })

    const onSubmit = (values, helpers) =>{
        console.log("Form data", values)
        props.handlerSubmit(values, helpers.setFieldError, 'email')
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validation} onSubmit={onSubmit}>
            {
                ({ values, errors, touched, isValid, handleBlur, handleChange}) => {
                    return (
                        <Form className="authForm registerForm" autoComplete="off">
                            <div className="authForm__form">
                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Имя' 
                                    name='firstName' 
                                    fieldClassName="auth_input" 
                                    placeholder="Имя"
                                    standartOnBlur={handleBlur}
                                    isError={errors.firstName && touched.firstName}
                                />

                                <FormikControl 
                                    control='input' 
                                    type="text" 
                                    label='Фамилия' 
                                    name='secondName' 
                                    fieldClassName="auth_input" 
                                    placeholder="Фамилия"
                                    standartOnBlur={handleBlur}
                                    isError={errors.secondName && touched.secondName}
                                />

                                <FormikControl
                                    control='input' 
                                    type="text" 
                                    label='Отчество' 
                                    name='fatherName' 
                                    fieldClassName="auth_input" 
                                    placeholder="Отчеcтво"
                                    standartOnBlur={handleBlur}
                                    isError={errors.fatherName && touched.fatherName}
                                />

                                <FormikControl 
                                    control='input' 
                                    type="email" 
                                    label='Email' 
                                    name='email' 
                                    fieldClassName="auth_input" 
                                    placeholder="Email"
                                    standartOnBlur={handleBlur}
                                    isError={errors.email && touched.email}
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
                                <FormikControl 
                                    control='input' 
                                    type="password" 
                                    label='Подтверждение пароля' 
                                    name='confirm_password' 
                                    fieldClassName="auth_input" 
                                    placeholder="Подтверждение пароля"
                                    standartOnBlur={handleBlur}
                                    isError={errors.confirm_password && touched.confirm_password}
                                />

                                {/* <FormikControl
                                    control="checkbox"
                                    name="acceptTermAndConditions"
                                    options={checkBoxOptions}
                                    checkboxValue={values.acceptTermAndConditions}
                                    standartOnChange={handleChange}
                                    isError={errors.acceptTermAndConditions}
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

export default RegisterForm;