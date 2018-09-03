import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import { AdsList } from '../../components/';
import { Grid } from '@material-ui/core';


class CategoryPage extends Component {

    componentDidMount() {
        console.log('Testing getData Function');
        console.log(this.props.match.params.category);
        this.props.getAds(this.props.match.params.category);
    }

    render() {
        const { ads } = this.props.ads;
        return (
            <Fragment>
                <div className="layout">
                    <center><h1>{this.props.match.params.category.toUpperCase()}</h1></center>
                    <Grid container spacing={32} >
                        {
                            ads.length == 0 ? 'No Ad' : ads.map(ads =>
                                (
                                    <AdsList key={ads.id} {...ads} />
                                )
                            )
                        }
                    </Grid>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    ads: state.ads  // ads from Index of Reducer file
});

export default connect(mapStateToProps, { getAds })(CategoryPage);
