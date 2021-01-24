import React, {Fragment} from 'react';
import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Image from "next/image";
import {motion, AnimatePresence, AnimateSharedLayout} from "framer-motion";

const containerVariants = {
    hover: {
        transition: {
            duration: 1,
        }
    },
}

const useStyles = makeStyles(() => ({
    cardContainer: {
        boxShadow: 'rgba(19, 15, 235, 0.1) 2px 4px 40px',
        transition: 'all .5s',
        '&:hover': {
            boxShadow: 'rgba(19, 15, 235, 0.3) 2px 4px 40px',
        }
    },
}))


const ProductsList = (props) => {

    const classes = useStyles();
    // const theme = useTheme();
    // const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));
    const matches310 = useMediaQuery('(max-width:310px)');

    return (

        <Fragment>
            <Box mt={18}>
                <Container style={{paddingLeft: '8px', paddingRight: '8px'}}>
                    <AnimateSharedLayout>
                        <Grid component={motion.div} layout container spacing={2} justify={'center'} align={'center'}>
                            <AnimatePresence>
                                {props.products.map((product) => {
                                    return (
                                        <Grid item container md={4} sm={6} lg={3}
                                              justify={'center'}
                                              layout
                                              component={motion.div}
                                              key={product.category + ' ' + product.id}
                                              variants={containerVariants}
                                              initial={{opacity: 0}}
                                              animate={{opacity: 1}}
                                              whileHover={'hover'}
                                              exit={{opacity: 0}}
                                        >

                                            <Card elevation={0} className={classes.cardContainer}>
                                                <CardActionArea disabled disableRipple>
                                                    <Image src={product.image} width={350} height={400}
                                                           alt={product.name}/>
                                                    <CardContent>
                                                        <Grid container justify={'space-between'}>
                                                            <Typography color={'primary'}
                                                                        variant={'subtitle2'}>{product.name}</Typography>
                                                            <Typography color={'primary'}
                                                                        variant={'subtitle2'}>$ {product.price}</Typography>
                                                        </Grid>
                                                        <Box mt={2}>
                                                            <Grid container justify={'space-between'}>
                                                                <Typography color={'primary'}
                                                                            variant={'subtitle2'}>Quantity</Typography>
                                                                <Typography color={'primary'}
                                                                            variant={'subtitle2'}>{product.quantity}</Typography>
                                                            </Grid>
                                                        </Box>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Grid direction={matches310 ? 'column' : 'row'} container
                                                          justify={'space-between'} alignItems={'center'}>

                                                        <Grid item style={{
                                                            order: matches310 ? 1 : 0,
                                                            width: matches310 ? '100%' : ''
                                                        }}>
                                                            <Button
                                                                name={props.cartedProducts ? 'Remove From Cart' : (product.isAddedToCart ? 'Remove From Cart' : 'ADD TO CART')}
                                                                fullWidth={matches310} size={'small'}
                                                                onClick={props.cartedProducts ? () => props.toggleCartHandler(product.id, product.category) : () => props.toggleCartHandler(product.id)}
                                                                color={'secondary'} variant={"contained"}>
                                                                <Typography variant={'subtitle2'}>
                                                                    {props.cartedProducts ? 'Remove From Cart' : (product.isAddedToCart ? 'Remove From Cart' : 'ADD TO CART')}
                                                                    {/*{product.isAddedToCart ? 'Remove From Cart' : 'ADD TO CART'}*/}
                                                                </Typography>
                                                            </Button>
                                                        </Grid>

                                                        <Grid item style={{
                                                            order: matches310 ? -1 : 0,
                                                            marginBottom: matches310 ? '8px' : '0'
                                                        }}>
                                                            <ButtonGroup color={'secondary'}>
                                                                <Button name={'subOne'} size={'small'}
                                                                        onClick={props.cartedProducts ? () => props.subHandler(product.id, product.category) : () => props.subHandler(product.id)}>
                                                                    <RemoveIcon fontSize="small"/>
                                                                </Button>
                                                                <Button name={'addOne'} size={'small'}
                                                                        onClick={props.cartedProducts ? () => props.addHandler(product.id, product.category) : () => props.addHandler(product.id)}>
                                                                    <AddIcon fontSize={'small'}/>
                                                                </Button>
                                                            </ButtonGroup>
                                                        </Grid>

                                                    </Grid>

                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })}
                            </AnimatePresence>

                        </Grid>
                    </AnimateSharedLayout>
                </Container>
            </Box>
        </Fragment>

    )
};

export default React.memo(ProductsList);
