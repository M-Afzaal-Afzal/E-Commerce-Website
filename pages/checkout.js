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
import ProductsList from "../src/components/ProductsList/ProductsList";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";
import * as selectors from "../src/store/selectors/index.selectors";
import StripeCheckoutButton from "../src/components/stripeCheckoutButton/checkoutButton.component";

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
        opacity: 0,
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

    const cartedProducts = useSelector(selectors.selectCartedProducts);

    const grandTotal = cartedProducts
        .map(product => (product.price * product.quantity))
        .reduce((prevValue, curValue) => (prevValue + curValue), 0);

    const removeFromCartHandlerCard = (category,id) => {
        dispatch(actions.removeFromCart(id));
    }

    const removeFromCartHandler = (category,id) => {
        dispatch(actions.removeFromCart(id));
    }

    const handleAdd = (id) => {
        dispatch(actions.addOneItemToCart(id))
    }

    const handleSub = (id) => {
        dispatch(actions.removeOneItemFromCart(id));
    }

    // console.log(cartedProducts);

    return (
        <React.Fragment>
            <Container maxWidth={'md'} disableGutters={matchesXs}>
                <Box mt={18} mb={2}>

                    <Hidden smUp>
                        <Box mt={-5}>
                            <ProductsList cartedProducts products={cartedProducts} subHandler={handleSub}
                                          addHandler={handleAdd}
                                          removeFromCartHandler={removeFromCartHandlerCard}/>
                        </Box>
                    </Hidden>

                    <AnimateSharedLayout>
                        <Grid component={motion.div} container layout>
                            <AnimatePresence>
                                {cartedProducts.map(product => {
                                    return (
                                        <Fragment key={product.category + ' ' + product.id}>

                                            <Hidden xsDown>
                                                <Grid item container className={classes.cardContainer}
                                                      alignItems={'center'}
                                                    // component={Paper}
                                                      layout
                                                      component={motion.div}
                                                      variants={containerVariants}
                                                      initial={'hidden'}
                                                      animate={'visible'}
                                                      whileHover={'hover'}
                                                      exit={'exit'}
                                                >
                                                    <Grid item className={classes.cardImageContainer} component={Box}
                                                          boxShadow={3}>
                                                        <Image src={product.image} width={160} height={190}
                                                               alt={product.name}/>
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
                                                                            <Typography
                                                                                variant={matchesSm ? 'body1' : 'h6'}
                                                                                color={'primary'}>
                                                                                {product.quantity} x ${product.price}
                                                                            </Typography>
                                                                        </Box>
                                                                    </Grid>

                                                                    <Grid item>
                                                                        <Box mt={1}>
                                                                            <ButtonGroup color={'secondary'}>
                                                                                <Button
                                                                                    name={'add one' + product.name}
                                                                                    onClick={() => handleSub(product.id, product.category)}
                                                                                    size={'small'}>
                                                                                    <RemoveIcon fontSize="small"/>
                                                                                </Button>
                                                                                <Button
                                                                                    name={'remove one' + product.name}
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
                                                                            name={'remove_from_cart'}
                                                                            onClick={() => removeFromCartHandler(product.category, product.id)}>
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

                            <Grid component={motion.div} layout
                                  style={{justifyContent: 'space-around', marginTop: '80px'}} item container
                                  jusify={'space-around'} alignItems={'center'}>
                                <Grid item component={motion.div} layout>
                                    <Box>
                                        <Typography color={'secondary'} variant={matchesSm ? 'h6' : 'h5'}>GRAND
                                            TOTAL</Typography>
                                    </Box>
                                </Grid>
                                <Grid item component={motion.div} layout>
                                    <Box>
                                        <Typography color={'secondary'} variant={matchesSm ? 'h6' : 'h5'}>
                                            $ {grandTotal}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Grid component={motion.div} layout item container justify={'center'}>
                                <Box mt={5} mb={10}>
                                    {/*<Button name={'pay now'} size={"large"} variant={'contained'}*/}
                                    {/*        color={'secondary'}>*/}
                                    {/*    PAY NOW*/}
                                    {/*</Button>*/}
                                    <StripeCheckoutButton price={grandTotal}/>
                                </Box>

                            </Grid>


                        </Grid>
                    </AnimateSharedLayout>

                </Box>
            </Container>

        </React.Fragment>

    );
}

export default React.memo(Checkout);