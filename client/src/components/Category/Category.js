import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    AppBar,Button,Card,Paper, CardMedia, Collapse,
    CardActions,CardContent,CardHeader,CssBaseline,
    Grid,Toolbar,Typography
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    CardContent: {
        padding: '10px',
        '&:hover': {
            background: 'lightgreen'
        }
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },

    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing.unit * 2,
    },
    cardActions: {
        [theme.breakpoints.up('sm')]: {
            paddingBottom: theme.spacing.unit * 2,
        },
    },
    footer: {
        marginTop: theme.spacing.unit * 8,
        borderTop: `1px solid ${theme.palette.divider}`,
        padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const tiers = [
    {
        buttonText: 'Properties',
        buttonImag: './images/house.svg',
        // buttonLink: '/real-estate/catagories',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Cars',
        buttonImag: './images/car.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Electronics',
        buttonImag: './images/computer.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Furniture',
        buttonImag: './images/bed.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Jobs',
        buttonImag: './images/job.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Mobiles',
        buttonImag: './images/mobile.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Bikes',
        buttonImag: './images/bikes.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Books,Sports',
        buttonImag: './images/book.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Fashion',
        buttonImag: './images/fashion.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Pets',
        buttonImag: './images/pet.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
    {
        buttonText: 'Services',
        buttonImag: './images/services.svg',
        buttonLink: '/posting',
        buttonVariant: 'outlined',
    },
   
];
// const footers = [
//     {
//         title: 'Company',
//         description: ['Team', 'History', 'Contact us', 'Loctions'],
//     },
//     {
//         title: 'Features',
//         description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
//     },
//     {
//         title: 'Resources',
//         description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//     },
//     {
//         title: 'Legal',
//         description: ['Privacy policy', 'Terms of use'],
//     },
// ];

const Category=(props)=> {
    const { classes } = props;

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
                        Pricing
          </Typography>
                    <Typography variant="title" align="center" color="textSecondary" component="p">
                        Quickly build an effective pricing table for your potential customers with this layout.
                        It&apos;s built with default Material-UI components with little customization.
          </Typography>
                </div>
                {/* End hero unit */}
                <Grid container spacing={8} alignItems="flex-end">
                    {tiers.map(tier => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={2}>
                            <Card>
                                {/* <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    subheaderTypographyProps={{ align: 'center' }}
                                    // action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                /> */}
                                <Link to={`${tier.buttonText}/categories`}>
                                    <CardContent align="center" className={classes.CardContent}>

                                        <img src={tier.buttonImag} />

                                        <Typography color="textPrimary" gutterBottom>
                                            {tier.buttonText}
                                        </Typography>
                                    </CardContent>
                                </Link>

                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </main>
            {/* Footer */}
            {/* <footer className={classNames(classes.footer, classes.layout)}>
                <Grid container spacing={32} justify="space-evenly">
                    {footers.map(footer => (
                        <Grid item xs key={footer.title}>
                            <Typography variant="title" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            {footer.description.map(item => (
                                <Typography key={item} variant="subheading" color="textSecondary">
                                    {item}
                                </Typography>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </footer> */}
            {/* End footer */}
        </React.Fragment>
    );
}

Category.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Category);