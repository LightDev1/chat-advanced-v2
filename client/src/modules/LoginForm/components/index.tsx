import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { FormikProps } from 'formik';

import { LoginFormValues } from '../containers';

const LoginForm = ({ values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting }: FormikProps<LoginFormValues>) => {
    return (
        <div>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <div className="block">
                <Form
                    className="login-form"
                >
                    <Form.Item
                        name="email"
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
                        name="password"
                        hasFeedback
                        rules={[{ required: true, message: 'Please input your Password!' }]}
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
                    <Form.Item>
                        {isSubmitting && !isValid && <span>Ошибка</span>}
                        <Button
                            onClick={() => handleSubmit()}
                            size="large"
                            type="primary"
                            htmlType="submit"
                            disabled={isSubmitting}
                        >
                            Войти в аккаунт
                        </Button>
                    </Form.Item>
                    <Link
                        className="auth__register-link"
                        to="/register"
                    >
                        Зарегистрироваться
                    </Link>
                </Form>
            </div>
        </div>
    );
};

export default LoginForm;
