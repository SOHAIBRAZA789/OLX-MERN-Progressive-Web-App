import React from 'react';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid, TextField } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './AdSearch.css';

class AdSearch extends React.Component {

    render() {
        return (



            <div className="search-bar">
                {/* <Toolbar> */}
                <Grid container>
                    {/* <Grid item xs={12} sm={5} md={5}> <input className="text-input" type="text" namae="Search" placeholder="Search" /></Grid> */}
                    <Grid item  xs={12} sm={5} md={5}>
                        <FormControl className="search-selector" >
                            <InputLabel className="search-label" >Select Category</InputLabel>
                            <Select className="me1">
                                <MenuItem  className="m2"value="">
                                    <em>None</em>
                                </MenuItem>
                                <Link to="/category/property"><MenuItem >Properties</MenuItem></Link>
                                <Link to="/category/vehicle"><MenuItem >Vehicle</MenuItem></Link>
                                <Link to="/category/electronics"><MenuItem >Electronics</MenuItem></Link>
                                <Link to="/category/furniture"><MenuItem >Furniture</MenuItem></Link>
                                <Link to="/category/jobs"><MenuItem >Jobs</MenuItem></Link>
                                <Link to="/category/mobiles"><MenuItem >Mobiles</MenuItem></Link>
                                <Link to="/category/bikes"><MenuItem >Bikes</MenuItem></Link>
                                <Link to="/category/books"><MenuItem >Books</MenuItem></Link>
                                <Link to="/category/fashion"><MenuItem >Fashion</MenuItem></Link>
                                <Link to="/category/pets"><MenuItem >Pets</MenuItem></Link>
                                <Link to="/category/services"><MenuItem >Services</MenuItem></Link>
                                
                                
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={2} md={2}> <Button variant="contained" color="primary">Search</Button></Grid>
                </Grid>
                {/* <TextField
                        id="search"
                        label="Search field"
                        type="search"
                        // className={classes.textField}
                        margin="normal"
                    />
                    
                    <select >
                        <option value='date'> Date</option>
                        <option value='amount'> Amount</option>
                    </select>

                    <Button variant="contained" color="primary" >
                        Search
                         </Button> */}

                {/* </Toolbar> */}
            </div>


        )
    }
}


export default AdSearch;