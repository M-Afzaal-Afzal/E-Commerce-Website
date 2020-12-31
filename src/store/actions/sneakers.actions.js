import * as types from '../actionTypes/actionTypes'

export const toggleSneakerCart = (id) => {
    return {
        type: types.TOGGLE_SNEAKER_CART,
        id: id,
    }
}

// export const subSneakerFromCart = (id) => {
//     return {
//         type: types.SUBSNEAKERFROMCART,
//         id: id,
//     }
// }

export const subOneSneaker = (id) => {
    return {
        type: types.SUB_ONE_SNEAKER,
        id: id,
    }
}

export const addOneSneaker = (id) => {
    return {
        type: types.ADD_ONE_SNEAKER,
        id: id,
    }
}