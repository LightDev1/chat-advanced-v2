import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Input } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';

import { RegisterFormValues } from '../containers';

const RegisterForm = ({ values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting }: FormikProps<RegisterFormValues>) => {
    return (
        <div>
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <div className="block">
                <Form
                    className="login-form"
                >

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your E-mail!' }]}
                        hasFeedback
                        validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
                        help={touched.email && errors.email}
                    >
                        <Input
                            id="email"
                            prefix={<MailOutlined />}
                            placeholder="E-mail"
                            size="large"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                        hasFeedback
                        validateStatus={!touched.fullname ? '' : errors.fullname ? 'error' : 'success'}
                        help={touched.fullname && errors.fullname}
                    >
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="Ваше имя"
                            size="large"
                            value={values.fullname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                        hasFeedback
                        validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
                        help={touched.password && errors.password}
                    >
                        <Input
                            id='password'
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            size="large"
                            placeholder="Пароль"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item
                        name="password2"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                        hasFeedback
                        validateStatus={!touched.password2 ? '' : errors.password2 ? 'error' : 'success'}
                        help={touched.password2 && errors.password2}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            size="large"
                            placeholder="Повторить пароль"
                            value={values.password2}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                    </Form.Item>
                    <Form.Item>
                        {isSubmitting && !isValid && <span>Ошибка</span>}
                        <Button
                            onClick={() => handleSubmit()}
                            size="large"
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitting}
                        >
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                    <Link
                        className="auth__register-link"
                        to="/login"
                    >
                        Войти в аккаунт
                    </Link>
                </Form>
            </div>
        </div>
    );
};

export default RegisterForm;
