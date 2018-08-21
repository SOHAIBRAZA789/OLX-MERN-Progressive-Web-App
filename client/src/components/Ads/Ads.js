// import React, { Component } from 'react';
// // import moment from 'moment';

// import { Link } from 'react-router-dom';
// // import axios from "axios";

// class Ads extends Component {
//     state = {
//         dataArray: []
//     }
// componentDidMount() {
//     let componentThis = this;
//     axios({
//         method: 'get',
//         url: `http://localhost:3000${this.props.location.pathname}`,
//     })
//         .then(function (response) {
//             // componentThis.setState({
//             //     dataArray: response.data
//             // });
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     this.setState({
//         dataArray: [{
//             name: 'My Add Name',
//             picture: '/images/iron.svg',
//             details: 'My Add Details',
//             condition: 'My Ad Condition',
//             postedBy: 'poster name',
//             buyBy: 'customer name',
//             postedTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
//             price: 15000,
//             link: '/books/music/ads/buy',
//             status: 'active',
//             contact: 30406548654,

//         }]
//     })
// }
//     render() {
//         return (
//             <div className='container-fluid'>

//                 <div className="container-fluid row h-100 justify-content-center align-items-center center-block">
//                     {
//                         this.state.dataArray.length == 0 ? 'No Ad' : this.state.dataArray.map((Obj, i) => {
//                             return <div className="card bodyCard d-inline-flex" key={i}>
//                                 <div className='row h-100 justify-content-center align-items-center'>
//                                     <img className="card-img-top bodyCardImg mt-3" src={Obj.picture} alt="Card cap" />
//                                 </div>
//                                 <div className="card-body">
//                                     <h5 className="card-title">{Obj.name}</h5>
//                                     <h6 className="card-subtitle mb-2 text-muted">{Obj.postedTime}</h6>
//                                     <h6 className="card-subtitle mb-2 text-muted">{Obj.condition}</h6>
//                                     <h6 className="card-subtitle mb-2 text-muted">Price Is {Obj.price}</h6>
//                                     <h6 className="card-subtitle mb-2 text-muted">{Obj.postedBy}</h6>
//                                     <p className="card-text">{Obj.details}</p>
//                                     <div className='container-fluid row h-100 justify-content-center align-items-center'>
//                                         <Link to={{
//                                             pathname: `/books/music/ads/buy`,
//                                             name: `${JSON.stringify(Obj)}`,
//                                             state: { fromDashboard: true }
//                                         }}>
//                                             <button className='btn btn-dark'>Buy</button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         })
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// export default Ads;


import React, { Component, Fragment } from 'react';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, Hidden
} from '@material-ui/core';
import './Ads.css';


class Ads extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }
    componentDidMount() {
        console.log('Testing getData Function');
        fetch('/ads', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });
    }
    render() {
        return (
            <Fragment>
                <div className="layout">

                    <center><h1>For Rent</h1></center>
                    {
                        this.state.users.length == 0 ? 'No Ad' : this.state.users.map(user =>
                            // <div key={user.id}>user: {user.name} Password: {user.password}</div>
                            /* Sub featured posts */
                            < Grid container spacing={40} className="cardGrid " >
                                {

                                    <Grid item key={user.name} xs={12} md={12}>
                                        <Card className="card">
                                            <div className="cardDetails">
                                                <CardContent>
                                                    <Typography variant="headline">{user.description}</Typography>
                                                    <Typography variant="subheading" color="textSecondary">
                                                        {user.type}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {user.sale}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {user.City}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {user.Price}
                                                    </Typography>
                                                    <Typography variant="subheading" paragraph>
                                                        {user.Date}
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                            <Hidden xsDown>
                                            {/* <CardMedia
                                                    className="cardMedia"
                                                    image="./images/house.svg" // eslint-disable-line max-len
                                                    title="Image title"
                                                /> */}
                                            <img className="Adsimages"src="./images/renthome.jpg" />
                                            </Hidden>
                                        </Card>
                                    </Grid>
                                }
                            </Grid>
                            /* End sub featured posts */
                        )
                    }


                </div>

            </Fragment>
        );
    }
}

export default Ads;

