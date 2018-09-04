import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Dashbord,Login, Signup, HomePage,CategoryPage} from '../containers';
import {AdPost,PageNotFound,Footer,AdsList,AdDetail,Navigation} from '../components';



const history = createBrowserHistory();

const AppRoute =()=>(
    <Router history={history}>
    <div>
    <Navigation/>
    <Switch>
    <Route path='/' component={HomePage} exact={true} />
    <Route path='/dashbord' component={Dashbord}  />
    <Route path='/login' component={Login}  />
    <Route path='/posting' component={AdPost}  />
    <Route path='/category/:category' component={CategoryPage} exact={true} />
    <Route path='/signup' component={Signup}  />
    <Route path='/:rent' component={AdsList} exact={true}  />
    <Route path='/item/:id' component={AdDetail}  exact={true} />
    
    <Route component={PageNotFound} />
    </Switch>   
    <Footer/>
    </div>
   
</Router>
);

export default AppRoute;