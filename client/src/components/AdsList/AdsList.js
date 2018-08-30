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
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, Hidden
} from '@material-ui/core';
import './AdsList.css';
import { stat } from 'fs';


class AdsList extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         adsList: []
    //     };
    // }
    componentDidMount() {
        console.log('Testing getData Function');
        this.props.getAds();

        // fetch('/ads', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // })
        //     .then(res => {
        //         console.log(res);
        //         return res.json();
        //     })
        //     .then(adsList => {
        //         console.log(adsList);
        //         this.setState({ adsList })
        //     });

    }

    render() {
        const { ads } = this.props.ads;
        return (
            <Fragment>
                <div className="layout">
                    <center><h1>For Rent</h1></center>
                    {
                        ads.length == 0 ? 'No Ad' : ads.map(ads =>
                            /* Sub featured posts */
                            < Grid container spacing={40} className="cardGrid " >
                                {
                                    <Grid item key={ads.name} xs={12} md={12}>
                                        <Link to={`/item/${ads._id}`}>
                                            <Card className="card">
                                                <div className="cardDetails">
                                                    <CardContent>
                                                        <Typography variant="headline">{ads.title}</Typography>
                                                        <Typography variant="subheading" color="textSecondary">
                                                            {ads.category}
                                                        </Typography>
                                                        <Typography variant="subheading" paragraph>
                                                            {ads.description}
                                                        </Typography>
                                                        <Typography variant="subheading" paragraph>
                                                            {ads.city}
                                                        </Typography>
                                                        <Typography variant="subheading" paragraph>
                                                            {ads.price}
                                                        </Typography>
                                                        <Typography variant="subheading" paragraph>
                                                            {ads.phone}
                                                        </Typography>
                                                        <Typography variant="subheading" paragraph>
                                                            {ads.created_date}
                                                        </Typography>
                                                    </CardContent>
                                                </div>
                                                <Hidden xsDown>
                                                    {/* <CardMedia
                                                    className="cardMedia"
                                                    image="./images/house.svg" // eslint-disable-line max-len
                                                    title="Image title"
                                                /> */}
                                                    <img className="Adsimages" src="./images/renthome.jpg" />
                                                </Hidden>
                                            </Card>
                                        </Link>
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

const mapStateToProps = (state) => ({
    ads: state.ads  // ads from Index of Reducer file
});

export default connect(mapStateToProps, { getAds })(AdsList);
