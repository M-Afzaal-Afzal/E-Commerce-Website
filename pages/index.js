import {Box, Button, Container, Grid, makeStyles, Typography, useMediaQuery, useTheme,} from "@material-ui/core";
import {Fragment} from "react";
import Header from "../src/components/Header/Header";
import Image from 'next/image'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '../src/utils/Link';
import Layout from "../src/components/Layout/Layout";

const useStyles = makeStyles(theme => ({
    gridContainer: {
        width: '100%',
        margin: '0'
    },
    linkButton: {
        '&:hover': {
            textDecoration: 'none',
        }
    }
}))

const Index = () => {

    const classes = useStyles();

    const theme = useTheme();

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    const products = [
        {
            name: 'MENS',
            img: '/mens.jpg',
            productsUrl: '/mens',
        },
        {
            name: 'WOMENS',
            img: '/womens.jpg',
            productsUrl: '/womens',
        },
        {
            name: 'HATS',
            img: '/hats.jpg',
            productsUrl: '/hats',
        },
        {
            name: 'SNEAKERS',
            img: '/sneakers.jpg',
            productsUrl: '/sneakers',
        },
        {
            name: 'JACKETS',
            img: '/jackets.jpg',
            productsUrl: '/jackets',
        }, {
            name: 'GLASSES',
            img: '/glasses.jpg',
            productsUrl: '/glasses',
        },
    ]

    return (
        <Layout>
            <Box mt={matchesXs ? 12 : 18}>
                <Grid container direction={'column'}>

                    <Container maxWidth={'lg'} disableGutters>
                        <Grid item container spacing={2} align={'center'} className={classes.gridContainer}>
                            {
                                products.map(product => {
                                    return (
                                        <Grid item container justify={'center'} sm={6} md={4} key={product.name}>
                                            <Card>
                                                <CardActionArea disableRipple>
                                                    <Image src={product.img} width={400} height={400}/>
                                                    <CardContent>
                                                        <Grid container justify={'center'}>
                                                            <Typography color={'primary'} variant={'h3'}>
                                                                {product.name}
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Grid container justify={'center'}>
                                                        <Button variant={'contained'} className={classes.linkButton} component={Link}
                                                                href={product.productsUrl} size="large" color="primary">
                                                            SHOP NOW
                                                        </Button>
                                                    </Grid>
                                                </CardActions>
                                            </Card>

                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Container>

                </Grid>
            </Box>
        </Layout>

    );
}

export default Index;