import * as actionTypes from '../actionTypes/actionTypes';

export const addOneItem = (category,id) => {
    return {
        type: actionTypes.ADD_ONE_ITEM,
        category: category,
        id: id,
    }
}

export const removeOneItem = (category,id) => {
    return {
        type: actionTypes.REMOVE_ONE_ITEM,
        category: category,
        id: id,
    }
}

export const isAddedToCartTrue = (category,id) => {
    return {
        type: actionTypes.IS_ADDED_TO_CART_TRUE,
        category: category,
        id: id,
    }
}

export const isAddedToCartFalse = (category,id) => {
    return {
        type: actionTypes.IS_ADDED_TO_CART_FALSE,
        category: category,
        id: id,
    }
}