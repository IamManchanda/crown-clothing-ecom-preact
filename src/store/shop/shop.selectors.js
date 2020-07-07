import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam,
    ),
  ),
);
