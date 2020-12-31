import * as types from '../actionTypes/actionTypes'

export const toggleWomenCart = (id) => {
    return {
        type: types.TOGGLE_WOMEN_CART,
        id: id,
    }
}

// export const subWomenFromCart = (id) => {
//     return {
//         type: types.SUBWOMENFROMCART,
//         id: id,
//     }
// }

export const subOneWomen = (id) => {
    return {
        type: types.SUB_ONE_WOMEN,
        id: id,
    }
}

export const addOneWomen = (id) => {
    return {
        type: types.ADD_ONE_WOMEN,
        id: id,
    }
}