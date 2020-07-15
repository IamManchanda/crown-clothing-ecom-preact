import { v4 as uuidv4 } from "uuid";

const DIRECTORY_INITIAL_STATE = {
  sections: [
    {
      id: uuidv4(),
      title: "Hats",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/hats.png?alt=media",
      linkUrl: "shop/hats",
    },
    {
      id: uuidv4(),
      title: "Sneakers",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/sneakers.png?alt=media",
      linkUrl: "shop/sneakers",
    },
    {
      id: uuidv4(),
      title: "Jackets",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/jackets.png?alt=media",
      linkUrl: "shop/jackets",
    },
    {
      id: uuidv4(),
      title: "Womens",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/womens.png?alt=media",
      size: "large",
      linkUrl: "shop/womens",
    },
    {
      id: uuidv4(),
      title: "Mens",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/crown-clothing-ecom-react.appspot.com/o/mens.png?alt=media",
      size: "large",
      linkUrl: "shop/mens",
    },
  ],
};

export default DIRECTORY_INITIAL_STATE;
