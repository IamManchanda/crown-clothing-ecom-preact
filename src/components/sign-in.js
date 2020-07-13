import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import FormInput from "./form-input";
import CustomButton from "./custom-button";
import {
  googleSignInStart,
  emailSignInStart,
} from "../store/user/user.actions";
import { EMPTY_SIGN_IN_STATE } from "../constants/empty-auth-state";

const SignInStyled = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    width: 90vw;
    margin: 0 auto 40px;
  }
`;

const TitleStyled = styled.h2`
  margin: 10px 0;
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    flex-direction: column;

    button {
      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
`;

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState(EMPTY_SIGN_IN_STATE);
  const { email, password } = userCredentials;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };
  const handleFormInputChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };
  return (
    <SignInStyled>
      <TitleStyled>I already have an account.</TitleStyled>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label="Your Email"
          name="email"
          type="email"
          value={email}
          onChange={handleFormInputChange}
          required
        />
        <FormInput
          label="Your Password"
          name="password"
          type="password"
          value={password}
          onChange={handleFormInputChange}
          required
        />
        <ButtonGroupStyled>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} googleSignIn>
            Sign In with Google
          </CustomButton>
        </ButtonGroupStyled>
      </form>
    </SignInStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
