import * as actionTypes from '../actionTypes/actionTypes'
import {cloneDeep} from 'lodash';
import produce from "immer";

const INITIAL_STATE = {
    cartedProducts: [],
}

const reducer = produce((draft,action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_CART: {

            const alreadyAddedProduct = draft.cartedProducts.find(product => product.id === action.id);
            if (alreadyAddedProduct) {
                const quantity = draft.cartedProducts.find(product => product.id === action.id).quantity;
                draft.cartedProducts.find(product => product.id === action.id).quantity = quantity + action.product.quantity;
            } else {
                const newProduct = cloneDeep(action.product);
                newProduct.isAddedToCart = true;
                draft.cartedProducts.push(newProduct)
            }
            break;
        }

        case actionTypes.REMOVE_FROM_CART: {

            const indexOfItem = draft.cartedProducts.findIndex(item => item.id === action.id);
            draft.cartedProducts.splice(indexOfItem, 1);
            break;
        }

        case actionTypes.ADD_ONE_ITEM_TO_CARTED_PRODUCTS: {

            draft.cartedProducts.find(product => product.id === action.id).quantity+=  1;
            break;
        }

        case actionTypes.REMOVE_ONE_ITEM_FROM_CARTED_PRODUCTS: {

            const quantity = draft.cartedProducts.find(product => product.id === action.id).quantity;
            draft.cartedProducts.find(product => product.id === action.id).quantity = Math.max(quantity - 1,1);
           break;
        }

        case actionTypes.CLEAR_CART:
            draft.cartedProducts = [];
            break;

        default:
            break;
    }
},INITIAL_STATE)

export default reducer;
