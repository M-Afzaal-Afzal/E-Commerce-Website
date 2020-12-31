import React, {Fragment} from 'react';
import Header from "../src/components/Header/Header";
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";


const Hats = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => {
        return state.hats.products;
    })

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleHatCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneHat(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneHat(id));
    }

    return (
        <Layout>
            <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                          toggleCartHandler={toggleCartHandler}/>
        </Layout>

    )
};

export default Hats;
