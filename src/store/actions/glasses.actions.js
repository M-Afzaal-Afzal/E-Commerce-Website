import * as types from '../actionTypes/actionTypes'

export const toggleGlassCart = (id) => {
    return {
        type: types.TOGGLE_GLASS_CART,
        id: id,
    }
}

export const subOneGlass = (id) => {
    return {
        type: types.SUB_ONE_GLASS,
        id: id,
    }
}

export const addOneGlass = (id) => {
    return {
        type: types.ADD_ONE_GLASS,
        id: id,
    }
}