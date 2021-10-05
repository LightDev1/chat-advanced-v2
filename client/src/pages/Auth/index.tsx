import React from 'react';

import { LoginForm, RegisterForm } from 'modules';

import './Auth.scss';
import { Route } from 'react-router';

const Auth: React.FC = () => {
    return (
        <section className="auth">
            <div className="auth__content">
                <Route path={['/', '/login']} exact>
                    <LoginForm />
                </Route>
                <Route path="/register" exact>
                    <RegisterForm />
                </Route>
            </div>
        </section>
    );
}

export default Auth;
