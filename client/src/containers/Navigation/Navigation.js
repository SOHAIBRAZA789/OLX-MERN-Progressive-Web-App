import React from 'react';
import { Link } from "react-router-dom";
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import purple from '@material-ui/core/colors/purple';
import {AdSearch} from '../../components'; 
import './Navigation.css'

const theme = createMuiTheme({
    palette: {
        primary: { main: red[500] }, // Purple and green play nicely together.
        secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
    },
});

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssRoot: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
    appBar: {
        position: 'relative',
    },
    toolbarTitle: {
        flex: 1,
    }
});


const Navigation=(props)=> {
    const { classes } = props;
    return (
        <MuiThemeProvider theme={theme}>
            <AppBar position="static" color="default" className={classes.appBar}>
                <Toolbar>

                    <Typography variant="title" color="default" noWrap className={classes.toolbarTitle}>
                        <Link to="/"><img src="./images/olx.png" /></Link>
                    </Typography>
                    <Link to="/account">
                        <Button>My Account</Button>
                    </Link>
                    <Link to="/posting">
                        <Button variant="contained" color="primary" className={classNames(classes.margin, classes.cssRoot)}>
                            Submit a Free Ad
                         </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            <AdSearch/>
        </MuiThemeProvider>)
};

// export default Header;

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);