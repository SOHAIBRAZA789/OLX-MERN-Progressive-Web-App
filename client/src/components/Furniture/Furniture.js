// import React from 'react';


// const Furniture = () => (
//     <div>
       
//         <h1> Furniture Ad Pages </h1>
//     </div>
// );

// export default Furniture ;



import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, Hidden
} from '@material-ui/core';

import { stat } from 'fs';


class Furniture extends Component {
    
    componentDidMount() {
        console.log('Testing getData Function');
        this.props.getAds();
    }

    render() {
        const { ads } = this.props.ads;
        const paramsCat = this.props.match.path;
        console.log(ads);
        console.log(this.props.match.path);
        let filteredAds = ads.filter(ad =>{
            return ad.category === paramsCat;
        })
        console.log(filteredAds);
        return (
            <Fragment>
                <div className="layout">
                    <center><h1>Furniture</h1></center>
                    {
                       ads.category == this.props.match.path ? 'No Ad' : filteredAds.map(ads =>
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

export default connect(mapStateToProps, { getAds })(Furniture);


