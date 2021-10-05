import { FormikErrors, withFormik } from 'formik';

import LoginForm from '../components';

export interface LoginFormValues {
    email: string;
    password: string;
}

interface LoginFormProps { }

const LoginFormContainer = withFormik<LoginFormProps, LoginFormValues>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),
    validate: (values: LoginFormValues) => {
        let errors: FormikErrors<LoginFormValues> = {};

        if (!values.email) {
            errors.email = 'Введите E-mail';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Неверный E-mail';
        }

        if (!values.password) {
            errors.password = 'Введите пароль';
        }

        return errors;
    },
    handleSubmit: (values) => {
        console.log(values);
    },
    displayName: 'LoginForm',
})(LoginForm);

export default LoginFormContainer;
