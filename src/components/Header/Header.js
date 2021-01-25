import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import {
    AppBar,
    Badge,
    Box,
    Button, Drawer,
    Grid, Hidden,
    IconButton,
    makeStyles, Paper,
    Popover,
    Toolbar, Typography, useMediaQuery, useTheme
} from "@material-ui/core";
import Image from "next/image";
import Link from '../../utils/Link';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {useSelector} from "react-redux";
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {auth} from '../../firebaseUtils/firebaseUtils'
import {createSelector} from "reselect";

import * as selectors from '../../store/selectors/index.selectors'

// const selectHats = state => state.hats;
// const selectMens = state => state.mens;
// const selectWomens = state => state.womens;
// const selectSneakers = state => state.sneakers;
// const selectGlasses = state => state.glasses;
// const selectJackets = state => state.jackets;
//
// const selectHatsProducts = createSelector(
//     [selectHats],
//     (hats) => hats.products
// )

const useStyles = makeStyles(() => ({
    logo: {
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
    },
    link: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    cartCard: {
        color: '#fff',
        backgroundColor: '#fff',
    },
    popoverContainer: {
        position: "relative"
    },
    cartCardsContainer: {
        width: '300px',
        maxHeight: '300px',
        padding: '0 16px',
    },
    cartCardContainer: {
        borderRadius: '4px',
        overflow: "hidden",
    },

    listContainer: {
        minWidth: '100%',
        maxWidth: 360,
    }
}))

const Header = () => {

    const isLoggedIn = Boolean(useSelector(state => state.user.currentUser));

    console.log(isLoggedIn)

    const hatsProducts = useSelector(selectors.selectHatsProducts);
    const mensProducts = useSelector(selectors.selectMensProducts);
    const womensProducts = useSelector(selectors.selectWomensProducts);
    const sneakersProducts = useSelector(selectors.selectSneakersProducts);
    const glassesProducts = useSelector(selectors.selectGlassesProducts);
    const jacketsProducts = useSelector(selectors.selectJacketsProducts);

    const allProducts = [...hatsProducts, ...mensProducts, ...womensProducts, ...sneakersProducts, ...glassesProducts, ...jacketsProducts];

    const cartedProducts = allProducts.filter(product => product.isAddedToCart);

    const quantityArr = cartedProducts.map((product) => product.quantity);

    const quantity = quantityArr.reduce((preVal,curVal) => preVal + curVal,0);
    console.log(quantityArr)
    console.log(quantity);
    // console.log(cartedProducts);


    const classes = useStyles();

    const theme = useTheme();

    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'))

    const [anchorEl, setAnchorEl] = useState(null);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawer = () => {
        setOpenDrawer(!openDrawer);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    let cartContent = (
        <Box boxShadow={2} px={2} py={2} my={2} className={classes.cartCardContainer}>
            <Grid container justify={'center'}>
                <Typography color={'primary'} variant={'h6'}>Cart is Empty</Typography>
            </Grid>
        </Box>
    )

    if (cartedProducts.length) {

        cartContent = cartedProducts.map(cartedProduct => {
            return (
                (<Box key={cartedProduct.name} my={1} boxShadow={2}
                      className={classes.cartCardContainer}>
                    <Grid container alignItems={'stretch'}>
                        <Grid item xs={4} style={{height: '90px'}}>
                            <Image src={cartedProduct.image} width={80}
                                   height={90} alt={cartedProduct.name}/>
                        </Grid>
                        <Grid item xs={8} style={{flexGrow: 1}}>
                            <Box ml={2} mt={1}>
                                <Typography color={'primary'}
                                            variant={"body1"}>{cartedProduct.name}</Typography>
                            </Box>
                            <Box ml={2} mt={1}>
                                <Typography color={'primary'}
                                            variant={"body1"}>{cartedProduct.quantity} x
                                    ${cartedProduct.price}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>)
            )
        })
    }

    return (
        <AppBar color={'default'} elevation={4}>
            <Container maxWidth={'lg'}>
                <Toolbar>

                    <Box ml={matchesSm ? 0 : 6} my={2} className={classes.logo}>
                        <Box component={Link} href={'/'}>
                            <Image src={'/logo.png'} width={matchesXs ? 33 : 67} height={matchesXs ? 40 : 60}
                                   alt={'Logo'}/>
                        </Box>
                    </Box>

                    <Hidden smDown>
                        <Button name={'home'} color={'secondary'} className={classes.link} component={Link}
                                href={'/'}>HOME</Button>

                        <Box mx={2}>

                            <Button name={'shop'} color={'secondary'} className={classes.link} component={Link}
                                    href={'/shop'}>SHOP</Button>
                        </Box>

                        {/*<Box mr={2}>*/}
                        {/*    <Button className={classes.link} component={Link} href={'/shop'}>Category</Button>*/}
                        {/*</Box>*/}

                        <Box mr={2}>
                            <Button name={'checkout'} color={'secondary'} className={classes.link} component={Link}
                                    href={'/checkout'}>CHECKOUT</Button>
                        </Box>

                        {/*<Box mx={2}>*/}
                        {/*    <Button>CONTACT</Button>*/}
                        {/*</Box>*/}
                        {
                            isLoggedIn ?
                                (
                                    <Button name={'signout'}
                                            color={'secondary'}
                                            onClick={() => auth.signOut()}
                                            className={classes.link}
                                    >
                                        SIGN OUT
                                    </Button>
                                )
                                :
                                (
                                    <Button name={'signin'}
                                            color={'secondary'}
                                            component={Link}
                                            className={classes.link}
                                            href={'/signin'}
                                    >
                                        SIGN IN
                                    </Button>
                                )
                        }
                    </Hidden>
                    <Box ml={2} mr={matchesXs ? 0 : (matchesSm ? 2 : 6)} className={classes.popoverContainer}>
                        <IconButton color={'secondary'} name={'shoppingCart'} aria-describedby={id}
                                    onClick={handleClick}>
                            <Badge badgeContent={quantity} max={100000} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </IconButton>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Paper elevation={2}>
                                <Box py={2} boxShadow={0}>
                                    <Grid container justify={'center'}>
                                        <Typography color={'secondary'} variant={'body1'}>
                                            SHOPPING CART
                                        </Typography>
                                    </Grid>
                                </Box>
                                <div className={classes.cartCardsContainer} style={{overflow: 'scroll'}}>
                                    {cartContent}
                                </div>
                                {cartedProducts.length === 0
                                    ?
                                    null
                                    :
                                    <Box py={2} px={2}>
                                        <Button name={'checkout'} className={classes.link} color={'secondary'}
                                                variant={'contained'}
                                                component={Link} href={'/checkout'} fullWidth>CHECKOUT</Button>
                                    </Box>
                                }
                            </Paper>
                        </Popover>
                    </Box>

                    <Hidden mdUp>
                        <IconButton color={'secondary'} name={'showTabsIcon'} onClick={handleDrawer}>
                            <DehazeOutlinedIcon/>
                        </IconButton>
                    </Hidden>
                    <Drawer open={openDrawer} onClose={handleDrawer}>
                        <Box className={classes.listContainer}>
                            <List>
                                <ListItem component={Link} href={'/'} color={'primary'}>
                                    <ListItemText>
                                        <Grid container justify={'center'} alignItems={'center'}>
                                            <Box mx={4}>
                                                <Image src={'/logo.png'} width={67} height={60} alt={'Logo'}/>
                                            </Box>
                                        </Grid>
                                    </ListItemText>
                                </ListItem>
                                <ListItem name={'home'} component={Link} href={'/'} color={'primary'} button>
                                    <ListItemText primary={'HOME'}/>
                                </ListItem>
                                <Divider/>
                                <ListItem name={'shop'} component={Link} href={'/shop'} button>
                                    <ListItemText primary={'SHOP'}/>
                                </ListItem>
                                <Divider/>
                                <ListItem name={'checkout'} component={Link} href={'/checkout'} button>
                                    <ListItemText primary={'CHECKOUT'}/>
                                </ListItem>
                                <Divider/>

                                {
                                    isLoggedIn ?
                                        (<ListItem name={'signout'} component={Link} href={''}
                                                   onClick={() => auth.signOut()} button>
                                            <ListItemText primary={'SIGN OUT'}/>
                                        </ListItem>)
                                        :
                                        (<ListItem name={'signin'} component={Link} href={'/signin'} button>
                                            <ListItemText primary={'SIGNIN'}/>
                                        </ListItem>)
                                }

                                <Divider/>
                            </List>
                        </Box>
                    </Drawer>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default React.memo(Header);
