import { createSelector } from "reselect";

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectShopCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections.find(
      (collection) => collection.routeName === collectionUrlParam,
    ),
  );
