import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Sandwiches from './Sanwiches';
import Electronics from './Electronics';

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
const Main = () => <h2>Main</h2>;

// const Sandwiches = () => <h2>Sandwiches</h2>;
// const Sandwiches = ({ routes }) => (
//     <div>
//       <h2>Tacos Pages</h2>
//       <ul>
//         <li>
//           <Link to="/sandwiches/bus">Bus</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches/cart">Cart</Link>
//         </li>
//       </ul>
  
//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   );

// const Electronics = ({ routes }) => (
//   <div>
//     <h2>Electronics Pages</h2>
//     <ul>
//       <li>
//         <Link to="/tacos/bus">Bus</Link>
//       </li>
//       <li>
//         <Link to="/tacos/cart">Cart</Link>
//       </li>
//     </ul>

//     {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//   </div>
// );

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Electronics,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const Pages = (props) => (
  <Router>
    <div>
      
      <ul>
        <li>
          <Link to="/tacos">Tacos</Link>
        </li>
        <li>
          <Link to="/sandwiches">Sandwiches</Link>
        </li>
      </ul>

      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </div>
  </Router>
);

// class Pages extends Component{
//   constructor (props){
//     super(props);
//     this.state={
//       data : this.props.data
//     }
//   }

//   render(){
//     return (
//       <div>
//         {this.props.data}
//         </div>
//     )
//   }
// }
export default Pages;
// const Pages = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/tacos">Tacos</Link>
//         </li>
//         <li>
//           <Link to="/sandwiches">Sandwiches</Link>
//         </li>
//       </ul>

//       {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
//     </div>
//   </Router>
// );

// export default Pages;


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// // import Header from './Header';
// // import Body from './Body';

// class Pages extends Component {
//     state = {
//         dataArray: [
//             {
//                 name: 'Cameras & Accessories',
//                 image: './images/camera.svg',
//                 link:'/electronics/camera'
//             },
//             {
//                 name: 'Computers & Accessories',
//                 image: './images/desktop.svg',
//                 link:'/electronics/computer'
//             },
//             {
//                 name: 'Games & Entertainment',
//                 image: './images/game-controller.svg',
//                 link:'/electronics/games'
//             },
//             {
//                 name: 'Generators, UPS & Power Solutions',
//                 image: './images/generator.svg',
//                 link:'/electronics/generators'
//             },
//             {
//                 name: 'Kitchen Appliances',
//                 image: './images/microwave.svg',
//                 link:'/electronics/kitchen'
//             },
//             {
//                 name: 'TV - Video - Audio',
//                 image: './images/television.svg',
//                 link:'/electronics/tv'
//             },
//             {
//                 name: 'AC & Coolers',
//                 image: './images/cooler.svg',
//                 link:'/electronics/ac'
//             },
//             {
//                 name: 'Fridges & Freezers',
//                 image: './images/fridge.svg',
//                 link:'/electronics/fridge'
//             },
//             {
//                 name: 'Washing Machines & Dryers',
//                 image: './images/laundry.svg',
//                 link:'/electronics/washing'
//             },
//             {
//                 name: 'Other Home Appliances',
//                 image: './images/iron.svg',
//                 link:'/electronics/appliances'
//             }
//         ]
//     }
//     render() {
//         return (
//             <div className="container-fluid">
               
//                 <Page dataArray={this.state.dataArray} />
//             </div>
//         );
//     }
// }

// export default Pages;




// class Page extends Component {
//     state = {
//         dataArray: []
//     }
//     componentDidMount() {
//         this.setState({
//             dataArray: this.props.dataArray
//         })
//     }
//     render() {
//         return (
//             <div className="container-fluid row h-100 justify-content-center align-items-center">
//                 {
//                     this.state.dataArray.length == 0 ? '' : this.state.dataArray.map((Obj, i) => {
//                         return <div className="card bodyCard d-inline-flex" key={i}>
//                             <Link to={`${Obj.link}/ads`}>
//                                 <div className='row h-100 justify-content-center align-items-center'>
//                                     <img className="card-img-top bodyCardImg mt-3" src={Obj.image} alt="Card cap" />
//                                 </div>
//                                 <div className="card-body">
//                                     <h5 className="card-title">{Obj.name}</h5>
//                                 </div>
//                             </Link>
//                         </div>
//                     })
//                 }
//             </div>
//         );
//     }
// }


