import React,{Fragment} from 'react';
import {Link } from 'react-router-dom';
import { Router, Route, Switch,IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { App,Login, Signup, Dashboard,Navigation} from '../containers';
import {AdPost,PageNotFound,Footer} from '../components';



const history = createBrowserHistory();

const AppRoute =()=>(
    <Router history={history}>
    <div>
    <Navigation/>
    <Switch>
    <Route path='/' component={Dashboard} exact={true} />
    <Route path='/account' component={Login}  />
    <Route path='/posting' component={AdPost}  />
    <Route component={PageNotFound}/>
    </Switch>   
    <Footer/>
    </div>
   
</Router>
);

export default AppRoute;