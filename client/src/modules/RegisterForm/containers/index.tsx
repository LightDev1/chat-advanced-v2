import { FormikErrors, withFormik } from 'formik';

import RegisterForm from '../components';

export interface RegisterFormValues {
    email: string;
    fullname: string;
    password: string;
    password2: string;
}

interface RegisterFormProps { }

const RegisterFormContainer = withFormik<RegisterFormProps, RegisterFormValues>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        fullname: '',
        password: '',
        password2: '',
    }),
    validate: (values: RegisterFormValues) => {
        let errors: FormikErrors<RegisterFormValues> = {};

        if (!values.email) {
            errors.email = 'Введите E-mail';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный E-mail';
        }

        if (!values.fullname) {
            errors.fullname = 'Введите ваше имя и фамилие';
        }

        if (!values.password) {
            errors.password = 'Введите пароль';
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(values.password)) {
            errors.password = 'Пароль должен содержать хотя бы 1 заглавную, строчную латинскую букву и цифру';
        }

        if (!values.password2) {
            errors.password2 = 'Повторите пароль';
        } else if (values.password2 !== values.password) {
            errors.password2 = 'Пароли не совпадауют';
        }

        return errors;
    },
    handleSubmit: (values) => {
        console.log(values);
    },
    displayName: 'RegisterForm',
})(RegisterForm);

export default RegisterFormContainer;
