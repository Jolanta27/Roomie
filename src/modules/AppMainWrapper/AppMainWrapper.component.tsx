import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getBaseUrl, routes } from '../../routes/routes';
import { Footer } from '../components/Footer/Footer.component';

import { Home } from './components/Home/Home.component';
import { Login } from './components/Login/Login.component';
import { NewUser } from './components/NewUser/NewUser.component';


export const AppMainWrapper: React.FC = () => {
    const { main } = routes;

    return (
        <>
            <Router>
                <Switch>
                    <Route
                        path={getBaseUrl()}
                        exact
                        component={Home}
                    />
                    <Route
                        path={main.login.path}
                        component={Login}
                    />
                    <Route
                        path={main.newUser.path}
                        component={NewUser}
                    />
                </Switch>
            </Router>
            <Footer />
        </>
    );
};
