import {createSelector} from "reselect";

const selectMens = state => state.mens;

export const selectMensProducts = createSelector(
    [selectMens],
    (mens) => mens.products
)