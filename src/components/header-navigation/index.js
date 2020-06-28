import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./styles.scss";

const HeaderNavigation = () => (
  <div className="header-navigation">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/auth">
        SIGN IN
      </Link>
    </div>
  </div>
);

export default HeaderNavigation;
