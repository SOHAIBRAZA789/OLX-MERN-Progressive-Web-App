

import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button, Grid } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import { AdSearch } from '../';
import './Navigation.css'


const Navigation = (props) => {
    // const { classes } = props;
    return (
        <div>
            <AppBar position="static" color="default" >
                <Toolbar>
                    <Grid container >
                        <Grid item xs={6} sm={2} md={6}>
                            <Link to="/">
                                <img src="./images/olx.png" />
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={10} md={6} >
                            <Grid className="NavMenu">
                            

                                <Link to="/login">
                                    <Button>My Account</Button>
                                </Link>
                                <Link to="/posting">
                                    <Button variant="contained" color="primary" >
                                        Submit a Free Ad
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <AdSearch />
        </div>
    )
};

export default Navigation;
