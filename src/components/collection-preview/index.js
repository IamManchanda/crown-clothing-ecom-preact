import React from "react";
import { withRouter } from "react-router-dom";

import "./styles.scss";
import CollectionItem from "../collection-item";
import CustomButton from "../custom-button";

const CollectionPreview = ({ title, items, routeName, history }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
    <div className="footer">
      <CustomButton onClick={() => history.push(`/shop/${routeName}`)}>
        Visit {title.toUpperCase()} Category
      </CustomButton>
    </div>
  </div>
);

export default withRouter(CollectionPreview);
