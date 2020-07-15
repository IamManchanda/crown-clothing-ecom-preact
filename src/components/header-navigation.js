import { h } from "preact";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";
import { Link } from "preact-router/match";

import Logo from "../assets/svg/crown.svg";
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import { selectCartHidden } from "../store/cart/cart.selectors";
import { selectCurrentUser } from "../store/user/user.selectors";
import { signOutStart } from "../store/user/user.actions";

const HeaderNavigationStyled = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 767px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

const LogoContainerStyled = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 10px;

  @media screen and (max-width: 767px) {
    width: 50px;
    padding: 0;
  }
`;

const OptionsContainerStyled = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 767px) {
    width: 80%;
  }
`;

const OptionLinkStyled = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

const HeaderNavigation = ({ currentUser, hidden, signOutStart }) => (
  <HeaderNavigationStyled>
    <LogoContainerStyled href="/">
      <Logo className="logo" />
    </LogoContainerStyled>
    <OptionsContainerStyled>
      <OptionLinkStyled href="/shop">SHOP</OptionLinkStyled>
      {currentUser ? (
        <OptionLinkStyled as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLinkStyled>
      ) : (
        <OptionLinkStyled href="/auth">SIGN IN</OptionLinkStyled>
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
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(HeaderNavigation);
