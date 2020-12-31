import * as types from '../actionTypes/actionTypes'

export const toggleHatCart = (id) => {
    return {
        type: types.TOGGLE_HAT_CART,
        id: id,
    }
}

export const subOneHat = (id) => {
    return {
        type: types.SUB_ONE_HAT,
        id: id,
    }
}

export const addOneHat = (id) => {
    return {
        type: types.ADD_ONE_HAT,
        id: id,
    }
}