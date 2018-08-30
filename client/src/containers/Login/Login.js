import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link, withRouter } from "react-router-dom";

import './Login.css';


function Login(props) {
    const { classes } = props;
    return (
        <React.Fragment>
            <Paper className="heroContent Login_Form" >
                <Avatar >
                    <LockIcon />
                </Avatar>
                <Typography variant="headline">Sign in</Typography>
                <form >
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="username" name="username" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <Button type="submit" fullWidth variant="raised" color="primary">
                        Sign in
            </Button>
                </form>
                <Link to="signup">
                    <Typography variant="paragraph">Create New Account</Typography>
                </Link>

            </Paper>

        </React.Fragment>
    );
}



export default Login;