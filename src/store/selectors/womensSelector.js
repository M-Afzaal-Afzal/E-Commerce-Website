import {createSelector} from "reselect";

const selectWomens = state => state.womens;

export const selectWomensProducts = createSelector(
    [selectWomens],
    (womens) => womens.products
)