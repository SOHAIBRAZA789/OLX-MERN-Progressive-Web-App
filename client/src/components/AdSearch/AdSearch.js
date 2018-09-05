import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid, TextField } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import './AdSearch.css';

class AdSearch extends React.Component {

    render() {
        return (



            <div >
                {/* <Toolbar> */}
                <Grid container  align="center">
                    {/* <Grid item xs={12} sm={5} md={5}> <input className="text-input" type="text" namae="Search" placeholder="Search" /></Grid> */}
                    <Grid item md={2}>
                    </Grid>

                    {/* START FORM  */}
                    <Grid item md={8}>
                        <Grid  container spacing={16} style={{backgroundColor:'#dcd7d780'}}>
                            {/* Start CategorySeerch Text */}
                            <Grid item xs={12} sm={12} md={5}>
                                <FormControl style={{ minWidth: '100%' }} className='{classes.formControl}'>
                                    <InputLabel htmlFor="category">Select Category</InputLabel>
                                    <Select value='{this.state.age}' onChange='{this.handleChange}' 
                                        inputProps={{
                                            name: 'category',
                                            id: 'category',
                                        }}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/* End Category Seerch Text */}
                            {/* Start Seerch Text */}
                            <Grid item xs={12} sm={12} md={5}>
                                <TextField style={{ minWidth: '100%' }} id="search" label="Search field" type="search" className='{classes.textField}' />
                            </Grid>
                            {/* End Seerch Text */}
                            {/* Start Search Button */}
                            <Grid item xs={12} sm={12} md={2}>
                                <Button variant="contained" color="default" style={{ backgroundColor:'#93e84f' ,minWidth: '100%',height:'100%' }}>
                                    <SearchIcon className='{classes.rightIcon}' />
                                    Search
                                </Button>
                            </Grid>
                            {/* End Search Button */}
                        </Grid>
                    </Grid>
                    {/* END START FORM  */}

                    <Grid item md={2}>
                    </Grid>
                </Grid>

            </div>


        )
    }
}


export default AdSearch;