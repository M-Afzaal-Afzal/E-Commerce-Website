import {Box, Button, Container, Grid, makeStyles, Typography, useMediaQuery, useTheme,} from "@material-ui/core";
import Image from 'next/image'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '../src/utils/Link';
import {motion} from "framer-motion";
import React from "react";

const useStyles = makeStyles(() => ({
    gridContainer: {
        width: '100%',
        margin: '0'
    },
    linkButton: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    cardContainer: {
        boxShadow: 'rgba(19, 15, 235, 0.1) 2px 4px 40px',
        transition: 'all .5s',
        '&:hover': {
            boxShadow: 'rgba(19, 15, 235, 0.3) 2px 4px 40px',
        }
    },
}))

const containerVariants = {
    visible: {
        opacity: 1,
        transition: {
            ease: 'easeInOut',
            duration: .5,
        }
    },
    hidden: {
        opacity: 0,
    },
}

const Index = () => {

    const classes = useStyles();

    const theme = useTheme();

    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    const products = [
        {
            name: 'MENS',
            img: '/mens.jpg',
            productsUrl: '/shop/mens',
        },
        {
            name: 'WOMENS',
            img: '/womens.jpg',
            productsUrl: '/shop/womens',
        },
        {
            name: 'HATS',
            img: '/hats.jpg',
            productsUrl: '/shop/hats',
        },
        {
            name: 'SNEAKERS',
            img: '/sneakers.jpg',
            productsUrl: '/shop/sneakers',
        },
        {
            name: 'JACKETS',
            img: '/jackets.jpg',
            productsUrl: '/shop/jackets',
        }, {
            name: 'GLASSES',
            img: '/glasses.jpg',
            productsUrl: '/shop/glasses',
        },
    ]

    return (
        <React.Fragment>
            <Box mt={matchesXs ? 12 : 18}>
                <Grid container direction={'column'} component={motion.div}
                      animate={'visible'}
                      initial={'hidden'}
                      variants={containerVariants}>

                    <Container maxWidth={'lg'} disableGutters>
                        <Grid item container spacing={2} align={'center'} className={classes.gridContainer}>
                            {
                                products.map(product => {
                                    return (
                                        <Grid item container justify={'center'} sm={6} md={4} key={product.name}>
                                            <Card elevation={0} className={classes.cardContainer}>
                                                <CardActionArea disabled disableRipple>
                                                    <Image priority src={product.img} width={350} height={350}
                                                           alt={product.name}/>
                                                    <CardContent>
                                                        <Grid container justify={'center'}>
                                                            <Typography color={'primary'} variant={'h5'}>
                                                                {product.name}
                                                            </Typography>
                                                        </Grid>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Grid container justify={'center'}>
                                                        <Button
                                                            name={'Shop ' + product.name}
                                                            variant={'contained'} className={classes.linkButton}
                                                            component={Link}
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
        </React.Fragment>

    );
}

export default React.memo(Index);