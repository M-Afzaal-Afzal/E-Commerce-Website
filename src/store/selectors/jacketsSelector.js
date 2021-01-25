import {createSelector} from "reselect";

const selectJackets = state => state.jackets;

export const selectJacketsProducts = createSelector(
    [selectJackets],
    (jackets) => jackets.products
)