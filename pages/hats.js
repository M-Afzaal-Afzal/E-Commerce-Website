import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";
import {Box} from "@material-ui/core";
import * as selectors from '../src/store/selectors/index.selectors'


const Hats = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectors.selectHatsProducts)

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
            <Box mt={-5}>

                <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                              toggleCartHandler={toggleCartHandler}/>
            </Box>
        </Layout>

    )
};

export default React.memo(Hats);
