import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import {Box, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import Layout from "../src/components/Layout/Layout";
import React from "react";
import * as selectors from '../src/store/selectors/index.selectors'

const Shop = () => {

    const theme = useTheme();

    const dispatch = useDispatch();

    const sneakerProducts = useSelector(selectors.selectShopSneakers).slice(0,4);

    const hatProducts = useSelector(selectors.selectShopHats).slice(0,4);

    const menProducts = useSelector(selectors.selectShopMens).slice(0,4);

    const womenProducts = useSelector(selectors.selectShopWomens).slice(0,4);

    const glassProducts = useSelector(selectors.selectShopGlasses).slice(0,4);

    const jacketProducts = useSelector(selectors.selectShopJackets).slice(0,4);


    const addToCartHandler = (product,id) => {
        dispatch(actions.addToCart(product,id));
        dispatch(actions.isAddedToCartTrue(product.category,id))
    }

    const addItemHandler = (category,id) => {
        dispatch(actions.addOneItem(category,id))
    }

    const subItemHandler = (category,id) => {
        dispatch(actions.removeOneItem(category,id))
    }

    const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXs = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <React.Fragment>
            <Box mt={matchesXs ? 12 : 18} pl={matchesXs ? 4 : 8} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>SNEAKERS</Typography>
            </Box>
            <ProductsList products={sneakerProducts} subHandler={subItemHandler} addHandler={addItemHandler}
                          addToCartHandler={addToCartHandler}/>
            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>HATS</Typography>
            </Box>
            <ProductsList products={hatProducts} subHandler={subItemHandler} addHandler={addItemHandler}
                          addToCartHandler={addToCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>MENS</Typography>
            </Box>
            <ProductsList products={menProducts} subHandler={subItemHandler} addHandler={addItemHandler}
                          addToCartHandler={addToCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>WOMENS</Typography>
            </Box>
            <ProductsList products={womenProducts} subHandler={subItemHandler} addHandler={addItemHandler}
                          addToCartHandler={addToCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>JACKETS</Typography>
            </Box>
            <ProductsList products={jacketProducts} subHandler={subItemHandler} addHandler={addItemHandler}
                          addToCartHandler={addToCartHandler}/>

            <Box pl={matchesXs ? 4 : 8} mt={6} mb={-18}>
                <Typography variant={matchesSm ? 'h4' : 'h3'} color={'primary'}>GLASSES</Typography>
            </Box>
            <ProductsList products={glassProducts} subHandler={subItemHandler} addHandler={addItemHandler}
                          addToCartHandler={addToCartHandler}/>
        </React.Fragment>

    )
};

export default React.memo(Shop);
