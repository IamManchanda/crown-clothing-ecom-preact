import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderNavigationStyled,
  LogoContainerStyled,
  OptionsContainerStyled,
  OptionLinkStyled,
} from "./styles";
import { ReactComponent as Logo } from "../../assets/svg/crown.svg";
import { auth } from "../../firebase/utils";
import CartIcon from "../cart-icon";
import CartDropdown from "../cart-dropdown";
import { selectCurrentUser } from "../../store/user/user.selectors";
import { selectCartHidden } from "../../store/cart/cart.selectors";

const HeaderNavigation = ({ currentUser, hidden }) => (
  <HeaderNavigationStyled>
    <LogoContainerStyled to="/">
      <Logo className="logo" />
    </LogoContainerStyled>
    <OptionsContainerStyled>
      <OptionLinkStyled to="/shop">SHOP</OptionLinkStyled>
      {currentUser ? (
        <OptionLinkStyled as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLinkStyled>
      ) : (
        <OptionLinkStyled to="/auth">SIGN IN</OptionLinkStyled>
      )}
      <CartIcon />
    </OptionsContainerStyled>
    {!hidden && <CartDropdown />}
  </HeaderNavigationStyled>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(HeaderNavigation);
