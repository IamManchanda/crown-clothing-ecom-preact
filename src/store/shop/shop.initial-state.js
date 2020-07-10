import { v4 as uuidv4 } from "uuid";
import {
  SHOP_HATS_COLLECTION,
  SHOP_SNEAKERS_COLLECTION,
  SHOP_JACKETS_COLLECTION,
  SHOP_WOMENS_COLLECTION,
  SHOP_MENS_COLLECTION,
} from "../../fixtures/shop-items-collection";

const SHOP_INITIAL_STATE = {
  collections: {
    hats: {
      id: uuidv4(),
      title: "Hats",
      routeName: "hats",
      items: SHOP_HATS_COLLECTION,
    },
    sneakers: {
      id: uuidv4(),
      title: "Sneakers",
      routeName: "sneakers",
      items: SHOP_SNEAKERS_COLLECTION,
    },
    jackets: {
      id: uuidv4(),
      title: "Jackets",
      routeName: "jackets",
      items: SHOP_JACKETS_COLLECTION,
    },
    womens: {
      id: uuidv4(),
      title: "Womens",
      routeName: "womens",
      items: SHOP_WOMENS_COLLECTION,
    },
    mens: {
      id: uuidv4(),
      title: "Mens",
      routeName: "mens",
      items: SHOP_MENS_COLLECTION,
    },
  },
};

export default SHOP_INITIAL_STATE;
