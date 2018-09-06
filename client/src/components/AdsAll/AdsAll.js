import React from 'react';
import {
    AppBar, Button, Card, Paper, CardMedia, Collapse,
    CardActions, CardContent, CardHeader, CssBaseline,
    Grid, Toolbar, Typography, IconButton
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { getAds } from '../../store/actions/adsAction';
import { AdsList } from '../../components/';
import adsSelector from '../../store/selectors/adsSelector'

class AdsAll extends React.Component {
    state = { expanded: false };
    
    componentDidMount() {
        console.log('Testing getData Function');
        
        this.props.getAds();
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { ads } = this.props.ads;

        return (
            
            <div>
               <Grid container  >
                    <Grid item md={1}>
                    </Grid>
                    <Grid item md={10}>
                    <Grid container spacing={32}>
                        {
                            ads.length == 0 ? 'No Ad' : ads.map((ads) =>
                                (
                                    <AdsList key={ads.id} {...ads} />
                                )
                            )
                        }
                        </Grid >
                    </Grid>
                    <Grid item md={1}>
                    </Grid>
                    </Grid>
            </div>
        );
    }
}
// export default LatestProduct;
const mapStateToProps = (state) => ({
    ads: state.ads  // ads from Index of Reducer file
    // ads: adsSelector(state.ads, state.filters)
});

export default connect(mapStateToProps, { getAds })(AdsAll);