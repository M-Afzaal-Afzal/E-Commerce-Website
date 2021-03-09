import {createSelector} from "reselect";

const selectCart = state => state.cart;

export const selectCartedProducts = createSelector(
    [selectCart],
    (cart) => cart.cartedProducts
)