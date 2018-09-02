import React,{Fragment} from 'react';
import {Link } from 'react-router-dom';
import { Router, Route, Switch,IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { App,Login, Signup, Dashboard,Navigation} from '../containers';
import {AdPost,PageNotFound,Footer,Pages,Property,Vehicle,Electronics,
        Furniture,Jobs,Mobiles,Bikes,Books,Fashion,Pets,Service,AdsList,AdDetail,CategoryPage
        } from '../components';



const history = createBrowserHistory();

const AppRoute =()=>(
    <Router history={history}>
    <div>
    <Navigation/>
    <Switch>
    <Route path='/' component={Dashboard} exact={true} />
    <Route path='/login' component={Login}  />
    <Route path='/posting' component={AdPost}  />
    {/* <Route path='/property' component={Property}  />
    <Route path='/vehicle' component={Vehicle}  /> */}
    <Route path='/category/:category' component={CategoryPage} exact={true} />
    {/* <Route path='/furniture' component={Furniture}  />
    <Route path='/jobs' component={Jobs}  />
    <Route path='/mobiles' component={Mobiles}  />
    <Route path='/bikes' component={Bikes}  />
    <Route path='/books' component={Books}  />
    <Route path='/fashion' component={Fashion}  />
    <Route path='/pets' component={Pets}  />
    <Route path='/service' component={Service}  /> */}
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