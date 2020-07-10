import { UPDATE_COLLECTIONS } from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
