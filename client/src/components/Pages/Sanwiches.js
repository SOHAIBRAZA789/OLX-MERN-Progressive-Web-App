
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes= [
          {
            path: "/sandwiches/bus",
            component: Bus
          },
          {
            path: "/sandwiches/cart",
            component: Cart
          }
        ]
  
  const RouteWithSubRoutes = route => (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );

const Sandwiches = ({ route }) => (
    <div>
      <h2>Tacos Pages</h2>
      <ul>
        <li>
          <Link to="/sandwiches/bus">Bus</Link>
        </li>
        <li>
          <Link to="/sandwiches/cart">Cart</Link>
        </li>
      </ul>
  
      <RouteWithSubRoutes  {...route} />
    </div>
  );

  export default Sandwiches;
  const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;