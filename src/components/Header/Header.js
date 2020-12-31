import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import {
    AppBar,
    Badge,
    Box,
    Button,
    Grid,
    IconButton,
    makeStyles, Paper,
    Popover,
    Toolbar, Typography
} from "@material-ui/core";
import Image from "next/image";
import Link from '../../utils/Link';
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {useSelector} from "react-redux";


const useStyles = makeStyles(theme => ({
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
    }
}))

const Header = () => {

    const hatsProducts = useSelector(state => state.hats.products);
    const mensProducts = useSelector(state => state.mens.products);
    const womensProducts = useSelector(state => state.womens.products);
    const sneakersProducts = useSelector(state => state.sneakers.products);
    const glassesProducts = useSelector(state => state.glasses.products);
    const jacketsProducts = useSelector(state => state.jackets.products);

    const allProducts = [...hatsProducts, ...mensProducts, ...womensProducts, ...sneakersProducts, ...glassesProducts, ...jacketsProducts];

    const cartedProducts = allProducts.filter(product => product.isAddedToCart);
    // console.log(cartedProducts);


    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

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
                                   height={90}/>
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

                    <Box ml={6} my={2} className={classes.logo}>
                        <Box component={Link} href={'/'}>
                            <Image src={'/logo.png'} width={60} height={60} alt={'Logo'}/>
                        </Box>
                    </Box>

                    <Button className={classes.link} component={Link} href={'/'}>HOME</Button>

                    <Box mx={2}>

                        <Button className={classes.link} component={Link} href={'/shop'}>SHOP</Button>
                    </Box>

                    <Box mr={2}>
                        <Button className={classes.link} component={Link} href={'/shop'}>Category</Button>
                    </Box>

                    <Box mr={2}>
                        <Button className={classes.link} component={Link} href={'/checkout'}>CHECKOUT</Button>
                    </Box>

                    {/*<Box mx={2}>*/}
                    {/*    <Button>CONTACT</Button>*/}
                    {/*</Box>*/}

                    <Button component={Link} className={classes.link} href={'/signin'}>SIGN IN</Button>

                    <Box ml={2} mr={6} className={classes.popoverContainer}>
                        <IconButton aria-describedby={id} onClick={handleClick}>
                            <Badge badgeContent={cartedProducts.length} color="secondary">
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
                                        <Button className={classes.link} color={'secondary'} variant={'contained'}
                                                component={Link} href={'/checkout'} fullWidth>CHECKOUT</Button>
                                    </Box>
                                }
                            </Paper>
                        </Popover>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
