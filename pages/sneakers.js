import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import React from "react";
import * as selectors from '../src/store/selectors/index.selectors'


const Sneakers = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectors.selectShopSneakers);


    const addToCartHandler = (product,id) => {
        dispatch(actions.addToCart(product,id));
        dispatch(actions.isAddedToCartTrue(product.category,id))
    }

    const addHandler = (category,id) => {
        dispatch(actions.addOneItem(category,id))
    }

    const subHandler = (category,id) => {
        dispatch(actions.removeOneItem(category,id));
    }

    return (
        <React.Fragment>
            <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                          addToCartHandler={addToCartHandler}/>
        </React.Fragment>

    )
};

export default React.memo(Sneakers);
