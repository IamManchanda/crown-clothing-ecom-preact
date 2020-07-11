import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
);

export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null,
  ),
);

export const selectShopCollectionIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching,
);

export const selectShopCollectionsIsLoaded = createSelector(
  [selectShop],
  (shop) => Boolean(shop.collections),
);
