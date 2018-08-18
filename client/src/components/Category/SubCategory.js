// import React, { Component } from 'react';
// import Header from './header/header';

// const SubCatagory = () => (
//     <div>
//         {/* <Header/>  */}
//         <h1> Sub Catagory Pages </h1>
        
//     </div>
// );

// export default SubCatagory;


////////////////////////////////////////
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SubCatagory = () => (
  <Router>
    <div>
      {/* <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> */}
        {/* <li>
          <Link to="/real-estate">Real Estate</Link>
        </li>
      </ul> */}

      {/* <hr />  */}

      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} /> */}
      {/* <Route path="/real-estate" component={Topics} /> */}
      <Topics/>
    </div>
  </Router>
);




const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`/sale`}>For Sale</Link>
      </li>
      {/* <li>
        <Link to={`${match.url}/rent`}>For Rent</Link>
      </li>
      <li>
        <Link to={`${match.url}/new-project`}>New Project</Link>
      </li> */}
    </ul>

    {/* <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    /> */}
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default SubCatagory;