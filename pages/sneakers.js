import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import Layout from "../src/components/Layout/Layout";
import React from "react";
import * as selectors from '../src/store/selectors/index.selectors'


const Sneakers = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectors.selectSneakersProducts);

    // console.log(menProducts);

    const toggleCartHandler = (id) => {
        dispatch(actions.toggleSneakerCart(id))
    }

    const addHandler = (id) => {
        dispatch(actions.addOneSneaker(id))
    }

    const subHandler = (id) => {
        dispatch(actions.subOneSneaker(id));
    }

    return (
        <Layout>
            <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                          toggleCartHandler={toggleCartHandler}/>
        </Layout>

    )
};

export default React.memo(Sneakers);
