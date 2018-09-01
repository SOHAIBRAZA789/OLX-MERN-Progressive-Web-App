import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import { AdsList } from '../';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, Hidden
} from '@material-ui/core';




class Electronics extends Component {

    componentDidMount() {
        console.log('Testing getData Function');
        this.props.getAds('electronics');
    }

    render() {
        const { ads } = this.props.ads;
        return (
            <Fragment>
                <div className="layout">
                    <center><h1>Electronics</h1></center>
                    {
                        ads.length == 0 ? 'No Ad' : ads.map(ads =>
                            (
                                <AdsList key={ads.id} {...ads} />
                            )
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

export default connect(mapStateToProps, { getAds })(Electronics);
