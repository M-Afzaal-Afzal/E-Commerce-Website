import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../src/store/actions/index.actions';
import ProductsList from "../src/components/ProductsList/ProductsList";
import {Box} from "@material-ui/core";
import * as selectors from '../src/store/selectors/index.selectors'


const Glasses = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectors.selectShopGlasses);


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
            <Box mt={-5}>
                <ProductsList products={products} subHandler={subHandler} addHandler={addHandler}
                              addToCartHandler={addToCartHandler}/>
            </Box>
        </React.Fragment>

    )
};

export default React.memo(Glasses);
