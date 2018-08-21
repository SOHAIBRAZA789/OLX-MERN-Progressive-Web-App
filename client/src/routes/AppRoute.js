import React,{Fragment} from 'react';
import {Link } from 'react-router-dom';
import { Router, Route, Switch,IndexRoute } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { App,Login, Signup, Dashboard,Navigation} from '../containers';
import {AdPost,PageNotFound,Footer,Pages,Property,Vehicle,Electronics,
        Furniture,Jobs,Mobiles,Bikes,Books,Fashion,Pets,Service,Ads,Buy
        } from '../components';



const history = createBrowserHistory();

const AppRoute =()=>(
    <Router history={history}>
    <div>
    <Navigation/>
    <Switch>
    <Route path='/' component={Dashboard} exact={true} />
    <Route path='/account' component={Login}  />
    <Route path='/posting' component={AdPost}  />
    <Route path='/property' component={Property}  />
    <Route path='/vehicle' component={Vehicle}  />
    <Route path='/electronics' component={Electronics}  />
    <Route path='/furniture' component={Furniture}  />
    <Route path='/jobs' component={Jobs}  />
    <Route path='/mobiles' component={Mobiles}  />
    <Route path='/bikes' component={Bikes}  />
    <Route path='/books' component={Books}  />
    <Route path='/fashion' component={Fashion}  />
    <Route path='/pets' component={Pets}  />
    <Route path='/service' component={Service}  />
    
    <Route path='/:rent' component={Ads}    />
    <Route path='/:catogary/:subcatogary/ads/buy' component={Buy}  />
    
    <Route component={PageNotFound}/>
    </Switch>   
    <Footer/>
    </div>
   
</Router>
);

export default AppRoute;