import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";
import {Box} from "@material-ui/core";
import React from "react";
import * as selectors from '../src/store/selectors/index.selectors'


const Mens = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectors.selectMensProducts);

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleMenCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneMens(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneMens(id));
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

export default React.memo(Mens);
