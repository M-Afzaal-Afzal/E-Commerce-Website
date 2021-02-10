import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../src/store/actions/index.actions';
import ProductsList from "../../src/components/ProductsList/ProductsList";
import {Box} from "@material-ui/core";
import * as selectors from '../../src/store/selectors/index.selectors'
import {useRouter} from "next/router";


const CollectionPreview = () => {

    const dispatch = useDispatch();

    const Router = useRouter();

    const {title} = Router.query;

    console.log(title)

   let products = null;

    switch (title) {
        case 'mens':
            products = useSelector(selectors.selectShopMens);
            break;
        case 'womens':
            products = useSelector(selectors.selectShopWomens);
            break;
        case 'hats':
            products = useSelector(selectors.selectShopHats);
            break;
        case 'sneakers':
            products = useSelector(selectors.selectShopSneakers);
            break;
        case 'glasses':
            products = useSelector(selectors.selectShopGlasses);
            break;
        case 'jackets':
            products = useSelector(selectors.selectShopJackets);
            break;
    }


    const addToCartHandler = (product,id) => {
        dispatch(actions.addToCart(product,id));
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

export default React.memo(CollectionPreview);
