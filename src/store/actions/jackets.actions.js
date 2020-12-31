import * as types from '../actionTypes/actionTypes'

export const toggleJacketCart = (id) => {
    return {
        type: types.TOGGLE_JACKET_CART,
        id: id,
    }
}

export const subOneJacket = (id) => {
    return {
        type: types.SUB_ONE_JACKET,
        id: id,
    }
}

export const addOneJacket = (id) => {
    return {
        type: types.ADD_ONE_JACKET,
        id: id,
    }
}