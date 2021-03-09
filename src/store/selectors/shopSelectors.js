import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectIsFetching = createSelector(
    [selectShop],
    (shop) => shop?.isFetching,
)

export const selectCollections = state => state.shop.collections;

// export const selectIsFetching = state => state.shop.isFetching;

export const selectErrorMessage = state => state.shop.errorMessage;


export const selectShopJackets = createSelector(
    [selectCollections],
    (collections) => collections ? collections.jackets?.items : []
)

export const selectShopSneakers = createSelector(
    [selectCollections],
    (collections) => collections ? collections.sneakers?.items : []
);

export const selectShopMens = createSelector(
    [selectCollections],
    (collections) => collections ? collections.mens?.items : []
);

export const selectShopWomens = createSelector(
    [selectCollections],
    (collections) => collections ? collections.womens?.items : []
);

export const selectShopHats = createSelector(
    [selectCollections],
    (collections) => collections ? collections.hats?.items : []
);

export const selectShopGlasses = createSelector(
    [selectCollections],
    (collections) => collections ? collections.glasses?.items : []
);