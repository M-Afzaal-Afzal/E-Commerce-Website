import React, {Fragment} from 'react';
import {Box, Button, ButtonGroup, Container, Grid, Typography} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Image from "next/image";
// import Header from "../src/components/Header/Header";
// import {useSelector, useDispatch} from 'react-redux';
// import * as actions from '../src/store/actions/index.actions';


const ProductsList = (props) => {

    // const dispatch = useDispatch();
    // const products = useSelector(state => {
    //     return state.mens.products;
    // })

    // console.log(menProducts);

    // const toggleCartHandler = (id) => {
    //     dispatch(actions.toggleMenCart(id))
    // }
    //
    // const addHandler = (id)=> {
    //     dispatch(actions.addOneMens(id))
    // }
    //
    // const subHandler = (id) => {
    //     dispatch(actions.subOneMens(id));
    // }

    return (

        <Fragment>
            <Box mt={18}>
                <Container maxWidth={'lg'}>
                    <Grid container spacing={2} justify={'center'} align={'center'}>
                        {props.products.map(product => {
                            return (
                                <Grid item container md={4} sm={6} lg={3} key={product.id} justify={'center'}>
                                    <Card>
                                        <CardActionArea disableRipple>
                                            <Image src={product.image} width={400} height={500}/>
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
                                            <Grid container justify={'space-between'} alignItems={'center'}>
                                                <Button size={'small'} onClick={() => props.toggleCartHandler(product.id)}
                                                        color={'secondary'} variant={"outlined"}>
                                                    <Typography color={'secondary'} variant={'subtitle2'}>
                                                        {product.isAddedToCart ? 'Remove From Cart' : 'ADD TO CART'}
                                                    </Typography>
                                                </Button>
                                                <ButtonGroup color={'secondary'}>
                                                    <Button size={'small'} onClick={() => props.subHandler(product.id)}>
                                                        <RemoveIcon fontSize="small"/>
                                                    </Button>
                                                    <Button size={'small'} onClick={() => props.addHandler(product.id)}>
                                                        <AddIcon fontSize={'small'}/>
                                                    </Button>
                                                </ButtonGroup>
                                            </Grid>

                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}

                    </Grid>
                </Container>
            </Box>
        </Fragment>

    )
};

export default ProductsList;
