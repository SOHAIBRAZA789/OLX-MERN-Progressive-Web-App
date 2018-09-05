import React, { Component, Fragment } from 'react';
import './HomePage.css';
import { Category, Footer, LatestProduct, AdSearch } from '../../components';


class HomePage extends Component {
    constructor() {
        super();
        this.state = { users: [] };
    }

    render() {
        return (
            <Fragment>
                <div className="box-layout_HomePage">
                    <AdSearch />
                </div>
                <div className="container">
                    <Category />
                </div>
                <LatestProduct />
            </Fragment>
        );
    }
}

export default HomePage;

