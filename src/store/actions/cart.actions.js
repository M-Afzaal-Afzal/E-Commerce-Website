import * as actionTypes from '../actionTypes/actionTypes';

export const addToCart = (product, id) => {
    return {
        type: actionTypes.ADD_TO_CART,
        product: product,
        id: id,
    }
}

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        id: id,
    }
}

export const addOneItemToCart = (id) => {
    return {
        type: actionTypes.ADD_ONE_ITEM_TO_CARTED_PRODUCTS,
        id: id,
    }
}

export const removeOneItemFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_ONE_ITEM_FROM_CARTED_PRODUCTS,
        id: id,
    }
}