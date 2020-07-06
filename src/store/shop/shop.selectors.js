import { createSelector } from "reselect";

const selectShop = ({ shop }) => shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);
