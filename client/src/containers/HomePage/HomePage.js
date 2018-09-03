import React, { Component, Fragment } from 'react';
import './HomePage.css';
import {Category,Footer,LatestProduct} from '../../components';


class HomePage extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }
    // componentDidMount() {
    //     console.log('Testing getData Function');
    //     fetch('/users', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     })
    //         .then(res => {
    //             console.log(res);
    //             return res.json();
    //         })
    //         .then(users => {
    //             console.log(users);
    //             this.setState({ users })
    //         });
    // }
    render() {
        return (
            <Fragment>
            <div className="layout">
                
                {/* <h1>HI Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>user: {user.name} Password: {user.password}</div>
                )} */}

                <Category/>
            </div>
            <LatestProduct/>
            </Fragment>
        );
    }
}

export default HomePage;

