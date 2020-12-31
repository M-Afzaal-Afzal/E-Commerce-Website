import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";
import {Box} from "@material-ui/core";


const Women = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => {
        return state.womens.products;
    })

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleWomenCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneWomen(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneWomen(id));
    }

    return (
        <Layout>
            <Box mt={-5}>

                <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                              toggleCartHandler={toggleCartHandler}/>
            </Box>
        </Layout>

    )
};

export default Women;
