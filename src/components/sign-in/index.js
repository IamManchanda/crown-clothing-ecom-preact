import React, { Component } from "react";

import { SignInStyled, TitleStyled, ButtonGroupStyled } from "./styles";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth, signInWithGoogle } from "../../firebase/utils";
import { EMPTY_SIGN_IN_STATE } from "../../constants/empty-auth-state";

class SignIn extends Component {
  state = { ...EMPTY_SIGN_IN_STATE };

  methods = {
    handleFormSubmit: async (event) => {
      event.preventDefault();
      const { state: { email, password } = {} } = this;
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ ...EMPTY_SIGN_IN_STATE });
      } catch (error) {
        console.error(error);
      }
    },
    handleFormInputChange: (event) => {
      const { value, name } = event.target;
      this.setState({ [name]: value });
    },
  };

  render() {
    const {
      state: { email, password } = {},
      methods: { handleFormSubmit, handleFormInputChange } = {},
    } = this;
    return (
      <SignInStyled>
        <TitleStyled>I already have an account.</TitleStyled>
        <span>Sign in with your email and password.</span>
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={handleFormInputChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleFormInputChange}
            required
          />
          <ButtonGroupStyled>
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} googleSignIn>
              Sign In with Google
            </CustomButton>
          </ButtonGroupStyled>
        </form>
      </SignInStyled>
    );
  }
}

export default SignIn;
