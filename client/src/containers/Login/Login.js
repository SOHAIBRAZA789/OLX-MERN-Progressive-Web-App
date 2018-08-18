import React, { Component } from 'react';


const Login = () => (
    <div>
        
        <h1> Login Pages </h1>
        
    </div>
);

 export default Login;

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const Account = () => (
//   <Router>
//     <div>
//       <ul>
       
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>

//       <hr />

//       {/* <Route exact path="/" component={Home} />
//       <Route path="/about" component={About} /> */}
//       <Route path="/topics" component={Topics} />
//     </div>
//   </Router>
// );




// const Account = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/categories`}>Sub Catagoris with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>
//     {/* <Route path="/topic" component={Topic} /> */}
//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
      
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// export default Account;