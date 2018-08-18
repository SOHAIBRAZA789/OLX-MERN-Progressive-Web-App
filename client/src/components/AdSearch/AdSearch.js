import React from 'react';
import { AppBar, Toolbar, Typography, Button,Grid } from '@material-ui/core';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

class AdSearch extends React.Component {
    
    render() {
        return (
                
                    
                       
                        <Grid container>
                       <Toolbar >
                        <input className="text-input" type='text' onChange={this.onTextChange} placeholder="Search expenses" />
                        </Toolbar>
                        <Toolbar>
                        <select >
                            <option value='date'> Date</option>
                            <option value='amount'> Amount</option>
                        </select>
                        </Toolbar>
                        <Toolbar>
                        <Button variant="contained" color="primary" >
                            Search
                         </Button>
                         </Toolbar>
                         </Grid>
                        
               
                )
    }
}


export default AdSearch;