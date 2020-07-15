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

const HeaderNavigation = ({ currentUser, hidden, signOutStart }) => (
  <HeaderNavigationStyled>
    <Link href="/" className="logo-container-link">
      <Logo className="logo" />
    </Link>
    <OptionsContainerStyled>
      <Link className="option-link" href="/shop">
        SHOP
      </Link>
      {currentUser ? (
        <Link className="option-link" as="div" onClick={signOutStart}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="option-link" href="/auth">
          SIGN IN
        </Link>
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
