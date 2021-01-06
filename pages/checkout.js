import {
    Box,
    Button,
    ButtonGroup,
    Grid, Hidden,
    IconButton,
    makeStyles,
    Typography, useMediaQuery,
    useTheme,
} from "@material-ui/core";
import React, {Fragment} from "react";
import Image from 'next/image'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Container from "@material-ui/core/Container";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../src/store/actions/index.actions';
import Layout from "../src/components/Layout/Layout";
import ProductsList from "../src/components/ProductsList/ProductsList";
import {motion, AnimatePresence} from "framer-motion";

const containerVariants = {
    visible: {
        opacity: 1,
        boxShadow: 'rgba(19, 15, 235, 0.1) 2px 4px 40px',
        transition: {
            ease: 'easeInOut',
            duration: .5,
        }
    },
    hover: {
        boxShadow: 'rgba(19, 15, 235, 0.3) 2px 4px 40px',
        transition: {
            duration: .5,
        }
    },
    hidden: {
        opacity: 0,
    },
    exit: {
        x: '-100vh',
        transition: {
            ease: 'easeIn',
            duration: .6
        }
    }
}


const useStyles = makeStyles(() => ({
    gridContainer: {
        width: '100%',
        margin: '0'
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    cardImageContainer: {
        // borderRadius: '6px',
        height: '190px'
    },
    cardContainer: {
        borderRadius: '10px',
        overflow: "hidden",
        marginBottom: "20px",
    }
}))


const Checkout = () => {

    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    const classes = useStyles();
    const dispatch = useDispatch();

    const hatsProducts = useSelector(state => state.hats.products);
    const mensProducts = useSelector(state => state.mens.products);
    const womensProducts = useSelector(state => state.womens.products);
    const sneakersProducts = useSelector(state => state.sneakers.products);
    const glassesProducts = useSelector(state => state.glasses.products);
    const jacketsProducts = useSelector(state => state.jackets.products);

    const allProducts = [...hatsProducts, ...mensProducts, ...womensProducts, ...sneakersProducts, ...glassesProducts, ...jacketsProducts];

    const cartedProducts = allProducts.filter(product => product.isAddedToCart);

    const toggleCart = (id, type) => {
        switch (type) {
            case 'HATS':
                dispatch(actions.toggleHatCart(id));
                break;
            case 'GLASSES':
                dispatch(actions.toggleGlassCart(id));
                break;
            case 'SNEAKERS':
                dispatch(actions.toggleSneakerCart(id));
                break;
            case 'JACKETS':
                dispatch(actions.toggleJacketCart(id));
                break;
            case 'MENS':
                dispatch(actions.toggleMenCart(id));
                break;
            case 'WOMENS':
                dispatch(actions.toggleWomenCart(id));
                break;
            default:
                throw new Error('Checkout file product type error');
        }
    }

    const handleAdd = (id, type) => {
        switch (type) {
            case 'HATS':
                dispatch(actions.addOneHat(id));
                break;
            case 'GLASSES':
                dispatch(actions.addOneGlass(id));
                break;
            case 'SNEAKERS':
                dispatch(actions.addOneSneaker(id));
                break;
            case 'JACKETS':
                dispatch(actions.addOneJacket(id));
                break;
            case 'MENS':
                dispatch(actions.addOneMens(id));
                break;
            case 'WOMENS':
                dispatch(actions.addOneWomen(id));
                break;
            default:
                throw new Error('Checkout file product type error');
        }
    }

    const handleSub = (id, type) => {
        switch (type) {
            case 'HATS':
                dispatch(actions.subOneHat(id));
                break;
            case 'GLASSES':
                dispatch(actions.subOneGlass(id));
                break;
            case 'SNEAKERS':
                dispatch(actions.subOneSneaker(id));
                break;
            case 'JACKETS':
                dispatch(actions.subOneJacket(id));
                break;
            case 'MENS':
                dispatch(actions.subOneMens(id));
                break;
            case 'WOMENS':
                dispatch(actions.subOneWomen(id));
                break;
            default:
                throw new Error('Checkout file product type error');
        }
    }

    // console.log(cartedProducts);

    return (
        <Layout>
            <Container maxWidth={'md'} disableGutters={matchesXs}>
                <Box mt={18} mb={2}>

                    <Hidden smUp>
                        <Box mt={-5}>
                            <ProductsList cartedProducts products={cartedProducts} subHandler={handleSub}
                                          addHandler={handleAdd}
                                          toggleCartHandler={toggleCart}/>
                        </Box>
                    </Hidden>

                    <Grid container>
                        <AnimatePresence>
                            {cartedProducts.map(product => {
                                return (
                                    <Fragment key={product.category + ' ' + product.id}>

                                        <Hidden xsDown>
                                            <Grid item container className={classes.cardContainer} alignItems={'center'}
                                                  // component={Paper}
                                                  component={motion.div}
                                                  variants={containerVariants}
                                                  initial={'hidden'}
                                                  animate={'visible'}
                                                  whileHover={'hover'}
                                                  exit={'exit'}
                                            >
                                                <Grid item className={classes.cardImageContainer} component={Box}
                                                      boxShadow={3}>
                                                    <Image src={product.image} width={160} height={190}/>
                                                </Grid>
                                                {/*style={{flexGrow: 1}}*/}
                                                <Grid item xs>
                                                    <Grid container direction={matchesSm ? 'column' : 'row'}
                                                          justify={'space-around'} alignItems={'center'}>
                                                        <Grid item>
                                                            <Box>
                                                                <Typography variant={matchesSm ? 'body1' : 'h6'}
                                                                            color={'primary'}>
                                                                    {product.name}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>

                                                        <Grid item>
                                                            <Grid container alignItems={'center'} justify={'center'}
                                                                  direction={'column'}>
                                                                <Grid item>
                                                                    <Box>
                                                                        <Typography variant={matchesSm ? 'body1' : 'h6'}
                                                                                    color={'primary'}>
                                                                            {product.quantity} x ${product.price}
                                                                        </Typography>
                                                                    </Box>
                                                                </Grid>

                                                                <Grid item>
                                                                    <Box mt={1}>
                                                                        <ButtonGroup color={'secondary'}>
                                                                            <Button
                                                                                onClick={() => handleSub(product.id, product.category)}
                                                                                size={'small'}>
                                                                                <RemoveIcon fontSize="small"/>
                                                                            </Button>
                                                                            <Button
                                                                                onClick={() => handleAdd(product.id, product.category)}
                                                                                size={'small'}>
                                                                                <AddIcon fontSize={'small'}/>
                                                                            </Button>
                                                                        </ButtonGroup>
                                                                    </Box>
                                                                </Grid>


                                                            </Grid>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>
                                                {/*style={{flexGrow: 1}}*/}
                                                {/*<Grid item sm >*/}
                                                {/*    */}
                                                {/*</Grid>*/}
                                                {/*style={{flexGrow: 1}}*/}
                                                <Grid item xs>
                                                    <Grid container align={'center'} alignItems={'center'}
                                                          justify={'space-around'}
                                                          direction={'row'}>
                                                        <Grid item>
                                                            <Box mr={4}>
                                                                <Typography variant={matchesSm ? 'body1' : 'h6'}
                                                                            color={'primary'}>
                                                                    TOTAL PRICE
                                                                </Typography>
                                                            </Box>
                                                            <Box mr={4} mt={1}>
                                                                <Typography variant={matchesSm ? 'body1' : 'h6'}
                                                                            color={'primary'}>
                                                                    {product.price * product.quantity}
                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item>
                                                            <Grid item sm align={'right'}>
                                                                <Box>
                                                                    <IconButton
                                                                        onClick={() => toggleCart(product.id, product.category)}>
                                                                        <CloseOutlinedIcon color={'primary'}
                                                                                           fontSize={'small'}/>
                                                                    </IconButton>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>

                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Hidden>
                                    </Fragment>
                                )
                            })}
                        </AnimatePresence>
                        <Grid style={{justifyContent: 'space-around', marginTop: '80px'}} item container
                              jusify={'space-around'} alignItems={'center'}>
                            <Grid item>
                                <Box>
                                    <Typography color={'secondary'} variant={matchesSm ? 'h6' : 'h5'}>GRAND
                                        TOTAL</Typography>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box>
                                    <Typography color={'secondary'} variant={matchesSm ? 'h6' : 'h5'}>
                                        $ {cartedProducts
                                        .map(product => (product.price * product.quantity))
                                        .reduce((prevValue, curValue) => (prevValue + curValue), 0)}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid item container justify={'center'}>
                            <Box mt={5} mb={10}>
                                <Button size={"large"} variant={'contained'} color={'secondary'}>
                                    PAY NOW
                                </Button>
                            </Box>

                        </Grid>


                    </Grid>

                </Box>
            </Container>

        </Layout>

    );
}

export default Checkout;