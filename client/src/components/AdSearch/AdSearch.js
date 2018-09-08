import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid, TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import './AdSearch.css';

import { setTextFilter,sortByCategory } from '../../store/actions/filterAction';

class AdSearch extends React.Component {
    state = {
        // search: "",
        category: "",
    };
    

    handleCategoryChange = (e) =>  {
        const category = e.target.value;
        this.props.sortByCategory(category);
        this.setState({
            category: category
        });
        
    };

    // _handleSubmit = e => {
    //     // e.preventDefault();
    //     console.log(this.state);
    //     const state = this.state;
    // };
    onTextChange = (e) => {
        const search = e.target.value;
        this.props.setTextFilter(search);
    };

    render() {
        return (
            <div >
                {/* <Toolbar> */}
                <Grid container align="center">
                    {/* <Grid item xs={12} sm={5} md={5}> <input className="text-input" type="text" namae="Search" placeholder="Search" /></Grid> */}
                    <Grid item md={2}>
                    </Grid>

                    {/* START FORM  */}
                    <Grid item md={8}>
                        <Grid container spacing={16} style={{ backgroundColor: '#dcd7d780' }}>
                            {/* Start CategorySeerch Text */}
                            <Grid item xs={12} sm={12} md={5}>
                                <FormControl style={{ minWidth: '100%' }} >
                                    <InputLabel htmlFor="category">Select Category</InputLabel>
                                    <Select value={this.state.category} onChange={this.handleCategoryChange} inputProps={{ name: 'category', id: 'category', }}>
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="property">Property</MenuItem>
                                        <MenuItem value="vehicle">Vehicle</MenuItem>
                                        <MenuItem value="electronics">Electronics</MenuItem>
                                        <MenuItem value="furniture">Furniture</MenuItem>
                                        <MenuItem value="jobs">Jobs</MenuItem>
                                        <MenuItem value="mobiles">Mobiles</MenuItem>
                                        <MenuItem value="bikes">Bikes</MenuItem>
                                        <MenuItem value="books">Books</MenuItem>
                                        <MenuItem value="fashion">Fashion</MenuItem>
                                        <MenuItem value="pets">Pets</MenuItem>
                                        <MenuItem value="service">Services</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            {/* End Category Seerch Text */}
                            {/* Start Seerch Text */}
                            <Grid item xs={12} sm={12} md={5}>
                                <TextField  onChange={this.onTextChange} style={{ minWidth: '100%' }} id="search" label="Search field" type="search" className='{classes.textField}' />
                            </Grid>
                            {/* End Seerch Text */}
                            {/* Start Search Button */}
                            <Grid item xs={12} sm={12} md={2}>
                                <Button onClick={this._handleSubmit} variant="contained" color="default" style={{ backgroundColor: '#93e84f', minWidth: '100%', height: '100%' }}>
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

const mapStateToProps = (state) => ({
    filters: state.filters

});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByCategory: (category) => dispatch(sortByCategory(category)),
   
});

// export default AdSearch;
export default connect(mapStateToProps, mapDispatchToProps)(AdSearch);