import {createSelector} from "reselect";

const selectSneakers = state => state.sneakers;

export const selectSneakersProducts = createSelector(
    [selectSneakers],
    (sneakers) => sneakers.products
)