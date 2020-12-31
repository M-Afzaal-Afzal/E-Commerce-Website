import * as types from '../actionTypes/actionTypes'

export const toggleMenCart = (id) => {
    return {
        type: types.TOGGLE_MEN_CART,
        id: id,
    }
}

// export const subMensFromCart = (id) => {
//     return {
//         type: types.SUBMENFROMCART,
//         id: id,
//     }
// }

export const subOneMens = (id) => {
    return {
        type: types.SUB_ONE_MEN,
        id: id,
    }
}

export const addOneMens = (id) => {
    return {
        type: types.ADD_ONE_MEN,
        id: id,
    }
}