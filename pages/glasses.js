import React, {Fragment} from 'react';
import Header from "../src/components/Header/Header";
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";


const Glasses = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => {
        return state.glasses.products;
    })

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleGlassCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneGlass(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneGlass(id));
    }

    return (
        <Layout>
            <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                          toggleCartHandler={toggleCartHandler}/>
        </Layout>

    )
};

export default Glasses;
