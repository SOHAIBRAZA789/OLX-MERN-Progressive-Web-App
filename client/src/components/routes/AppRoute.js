import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Account from '../account';
import Header from '../header/header';
import Home from '../home/home';
import PageNotFound from '../PageNotFound';
import Posting from '../posting';


const history = createBrowserHistory();

const AppRoute =()=>(
    <Router history={history}>
    <Switch>
    
        
        <Route path='/' component={Home} exact={true} />
        <Route path='/account' component={Account} exact={true} />
        <Route path='/posting' component={Posting} exact={true} />
        <Route component={PageNotFound} exact={true} />
    </Switch>
    
</Router>
);

export default AppRoute;