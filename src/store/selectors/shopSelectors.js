import {createSelector} from "reselect";

export const selectShop = state => state.shop;

export const selectShopJackets = createSelector(
    [selectShop],
    (shop) => shop.jackets.items
)

export const selectShopSneakers = createSelector(
    [selectShop],
    (shop) => shop.sneakers.items
);

export const selectShopMens = createSelector(
    [selectShop],
    (shop) => shop.mens.items
);

export const selectShopWomens = createSelector(
    [selectShop],
    (shop) => shop.womens.items
);

export const selectShopHats = createSelector(
    [selectShop],
    (shop) => shop.hats.items
);

export const selectShopGlasses = createSelector(
    [selectShop],
    (shop) => shop.glasses.items
);