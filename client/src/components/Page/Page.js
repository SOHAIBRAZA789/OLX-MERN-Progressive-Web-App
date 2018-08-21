import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography
} from '@material-ui/core';

class Page extends Component {
    state = {
        dataArray: []
    }
    componentDidMount() {
        this.setState({
            dataArray: this.props.dataArray
        })
    }
    render() {
        return (
            <div>
                {/* {
                    this.state.dataArray.length == 0 ? '' : this.state.dataArray.map((data, i) => {
                        return <div className="card bodyCard d-inline-flex" key={i}>
                            <Link to={`${data.link}/ads`}>
                                <div className='row h-100 justify-content-center align-items-center'>
                                    <img className="card-img-top bodyCardImg mt-3" src={data.image} alt="Card cap" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                </div>
                            </Link>
                        </div>
                    })
                } */}


                <div className="heroContent">
                <Grid container spacing={8} className="catagory-grid" alignItems="flex-end">
                {this.state.dataArray.length == 0 ? '' : this.state.dataArray.map((data, i) =>  (
                    // Enterprise card is full width at sm breakpoint
                    <Grid item key={data.title} xs={6} sm={ 4} md={2} key={i}>
                        <Card>
                            <Link to={`${data.link}/ads`}>
                                <CardContent align="center" className="CardContent">
                                    <img src={data.image} />
                                    <Typography color="textPrimary" gutterBottom>
                                        {data.name}
                                    </Typography>
                                </CardContent>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </div>
            </div>
        );
    }
}

export default Page;