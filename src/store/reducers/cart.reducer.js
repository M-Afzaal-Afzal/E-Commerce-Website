import * as actionTypes from '../actionTypes/actionTypes'
import {cloneDeep} from 'lodash';

const INITIAL_STATE = {
    cartedProducts: [],
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {
            const newState = cloneDeep(state);
            const alreadyAddedProduct = newState.cartedProducts.find(product => product.id === action.id);
            if (alreadyAddedProduct) {
                const quantity = newState.cartedProducts.find(product => product.id === action.id).quantity;
                newState.cartedProducts.find(product => product.id === action.id).quantity = quantity + action.product.quantity;
            } else {
                const newProduct = cloneDeep(action.product);
                newProduct.isAddedToCart = true;
                newState.cartedProducts.push(newProduct)
            }
            return newState;
        }

        case actionTypes.REMOVE_FROM_CART: {
            const newState = cloneDeep(state);
            const indexOfItem = newState.cartedProducts.findIndex(item => item.id === action.id);
            newState.cartedProducts.splice(indexOfItem, 1);
            return newState;
        }

        case actionTypes.ADD_ONE_ITEM_TO_CARTED_PRODUCTS: {
            const newState = cloneDeep(state);
            newState.cartedProducts.find(product => product.id === action.id).quantity+=  1;
            return newState ;
        }

        case actionTypes.REMOVE_ONE_ITEM_FROM_CARTED_PRODUCTS: {
            const newState = cloneDeep(state);
            const quantity = newState.cartedProducts.find(product => product.id === action.id).quantity;
            newState.cartedProducts.find(product => product.id === action.id).quantity = Math.max(quantity - 1,1);
            return newState;
        }

        default:
            return state;
    }

}
export default reducer;
