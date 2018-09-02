// import React, { Component, Fragment } from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getAds } from '../../store/actions/adsAction';
// import {
//     AppBar, Button, Card, Paper, CardMedia, Collapse,
//     CardActions, CardContent, CardHeader, CssBaseline,
//     Grid, Toolbar, Typography, Hidden
// } from '@material-ui/core';
// import './AdsList.css';
// import { stat } from 'fs';


// const AdsList =({_id,title,category,description,city,price,phone,created_date})=>(

//                             /* Sub featured posts */
//                             < Grid  container spacing={40} className="cardGrid " >
//                                 {
//                                     <Grid item  xs={12} md={12}>
//                                         <Link to={`/item/${_id}`}>
//                                             <Card className="card">
//                                                 <div className="cardDetails">
//                                                     <CardContent>
//                                                         <Typography variant="headline">{title}</Typography>
//                                                         <Typography variant="subheading" color="textSecondary">
//                                                             {category}
//                                                         </Typography>
//                                                         <Typography variant="subheading" paragraph>
//                                                             {description}
//                                                         </Typography>
//                                                         <Typography variant="subheading" paragraph>
//                                                             {city}
//                                                         </Typography>
//                                                         <Typography variant="subheading" paragraph>
//                                                             {price}
//                                                         </Typography>
//                                                         <Typography variant="subheading" paragraph>
//                                                             {phone}
//                                                         </Typography>
//                                                         <Typography variant="subheading" paragraph>
//                                                             {created_date}
//                                                         </Typography>
//                                                     </CardContent>
//                                                 </div>
//                                                 <Hidden xsDown>
//                                                     {/* <CardMedia
//                                                     className="cardMedia"
//                                                     image="./images/house.svg" // eslint-disable-line max-len
//                                                     title="Image title"
//                                                 /> */}
//                                                     <img className="Adsimages" src="./images/renthome.jpg" />
//                                                 </Hidden>
//                                             </Card>
//                                         </Link>
//                                     </Grid>

//                                 }
//                             </Grid>
//                             /* End sub featured posts */
//                             );
//     export default AdsList;


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Chat from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class AdsList extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;

        return (

            < Grid item md={4} >
                <Card className={classes.card}>
                <Link to={`/item/${this.props._id}`}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                S
                            </Avatar>
                        }
                        action={
                            <IconButton>
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={<strong>{this.props.title}</strong>}
                        subheader={this.props.created_date}
                        // subheader="September 14, 2016"
                    />
                    <CardMedia
                        className={classes.media}
                        image={`/static/media/${this.props.file}`}
                        //url("/static/media/1535824444489-1.jpg")
                        // image="/static/images/cards/paella.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        {/* <Typography component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography> */}
                            <Typography component="p">
                                <strong>Category: </strong>{this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}
                            </Typography>
                            <Typography component="p">
                                <strong>Price: </strong>{this.props.price}
                            </Typography>
                    </CardContent>
                    </Link>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="Chat">
                            <Chat />
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

        );
    }
}

AdsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdsList);
