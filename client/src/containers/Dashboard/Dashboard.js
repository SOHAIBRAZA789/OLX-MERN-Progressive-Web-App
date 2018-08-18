import React, { Component } from 'react';

import {Category,Footer} from '../../components';
import {Navigation} from '../';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }
    componentDidMount() {
        console.log('Testing getData Function');
        fetch('/users', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(users => {
                console.log(users);
                this.setState({ users })
            });
    }
    render() {
        return (
            <div >
                
                <h1>HI Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>user: {user.name} Password: {user.password}</div>
                )}

                <Category/>
                <Footer/>
            </div>
        );
    }
}

export default Dashboard;

