import React, { Component } from 'react'

//React Router
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Settings from '../pages/Settings';

import NewPage from '../pages/NewPage';

import Login from '../pages/Login';

const Routes = () => {
        return (
            <section className="content main-content">
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                    <Route exact path='/Dashboard' component={Dashboards} />
                    <Route exact path='/Settings' component={Settings} />
                    <Route exact path='/NewPage' component={NewPage} />
                    <Route exact path='/Login' component={Login} />
                </Switch>
            </section>
        );
    }

export default Routes
