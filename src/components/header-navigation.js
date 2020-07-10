import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/svg/crown.svg";
import { auth } from "../firebase/utils";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import { selectCurrentUser } from "../store/user/user.selectors";
import { selectCartHidden } from "../store/cart/cart.selectors";

const HeaderNavigationStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const LogoContainerStyled = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;
`;

const OptionsContainerStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const OptionLinkStyled = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

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
