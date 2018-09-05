import React, { Component, Fragment } from 'react';
import './HomePage.css';
import { Category, Footer, LatestProduct, AdSearch } from '../../components';
import { Grid, Typography } from '@material-ui/core';

class HomePage extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }

    render() {
        return (
            <Fragment>
                <Grid container className="box-layout_HomePage">
                    <Grid item md={12} >
                        <Typography variant="display3" align="center" color="secondary" gutterBottom>
                            WELCOME TO CLASSIALLY
                    </Typography>
                    </Grid>
                    <Grid item md={12} >
                        <AdSearch />
                    </Grid>
                </Grid>
                <Grid className="container">
                    <Category />
                    <LatestProduct />
                </Grid>

            </Fragment>
        );
    }
}

export default HomePage;

