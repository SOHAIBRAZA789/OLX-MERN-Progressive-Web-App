import React, { Component } from 'react';
import Header from '../header/header';


class Home extends Component {
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
                <Header/> 
                <h1>HI Users</h1>
                {this.state.users.map(user =>
                    <div key={user.id}>user: {user.name} Password: {user.password}</div>
                )}
            </div>
        );
    }
}

export default Home;

