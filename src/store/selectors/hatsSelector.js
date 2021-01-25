import {createSelector} from "reselect";

const selectHats = state => state.hats;

export const selectHatsProducts = createSelector(
    [selectHats],
    (hats) => hats.products
)
