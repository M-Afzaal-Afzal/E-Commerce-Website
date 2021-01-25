import {createSelector} from "reselect";

const selectGlasses = state => state.glasses;

export const selectGlassesProducts = createSelector(
    [selectGlasses],
    (glasses) => glasses.products
)