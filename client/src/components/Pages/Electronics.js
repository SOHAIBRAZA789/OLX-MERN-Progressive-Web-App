import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
     
          {
            path: "/tacos/bus",
            component: Bus
          },
          {
            path: "/tacos/cart",
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

const Electronics = ({ routes }) => (
    <div>
      <h2>Electronics Pages</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>
{/*   
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
    </div>
  );

  export default Electronics;
//   const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const Bus = ({ routes }) => (
    <div>
      <h2>Electronics Pages</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>
{/*   
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)} */}
    </div>
  );