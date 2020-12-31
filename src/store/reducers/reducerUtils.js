import {cloneDeep} from "lodash";

export const addProduct = (state, id) => {
    const quantity = state.products[id - 1].quantity;
    const newHats = cloneDeep(state);
    newHats.products[id - 1].quantity = quantity + 1;
    return newHats;

}

export const subProduct = (state, id) => {
    const newHats = cloneDeep(state);
    const quantity = newHats.products[id - 1].quantity;
    newHats.products[id - 1].quantity = Math.max(quantity - 1, 1);
    return newHats;

}

export const toggleCart = (state, id) => {
    const newHats = cloneDeep(state);
    newHats.products[id - 1].isAddedToCart = !newHats.products[id - 1].isAddedToCart;
    return newHats;
}

// export const subFromCart = (state, id) => {
//     const newHats = cloneDeep(state);
//     newHats.products[id - 1].isAddedToCart = false;
//     return newHats;
// }