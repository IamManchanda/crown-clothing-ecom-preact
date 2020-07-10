import { v4 as uuidv4 } from "uuid";

const DIRECTORY_INITIAL_STATE = {
  sections: [
    {
      id: uuidv4(),
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      linkUrl: "shop/hats",
    },
    {
      id: uuidv4(),
      title: "Sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      linkUrl: "shop/sneakers",
    },
    {
      id: uuidv4(),
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      linkUrl: "shop/jackets",
    },
    {
      id: uuidv4(),
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      id: uuidv4(),
      title: "Mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

export default DIRECTORY_INITIAL_STATE;
