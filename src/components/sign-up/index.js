import React, { Component } from "react";

import { SignUpStyled, TitleStyled } from "./styles";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { auth, createUserProfileDocument } from "../../firebase/utils";
import { EMPTY_SIGN_UP_STATE } from "../../constants/empty-auth-state";

class SignUp extends Component {
  state = { ...EMPTY_SIGN_UP_STATE };

  methods = {
    handleFormSubmit: async (event) => {
      event.preventDefault();
      const {
        state: { displayName, email, password, confirmPassword } = {},
      } = this;
      if (password !== confirmPassword) {
        alert("Password don't match.");
        return;
      }
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password,
        );
        await createUserProfileDocument(user, { displayName });
        this.setState({ ...EMPTY_SIGN_UP_STATE });
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
      state: { displayName, email, password, confirmPassword } = {},
      methods: { handleFormSubmit, handleFormInputChange } = {},
    } = this;
    return (
      <SignUpStyled>
        <TitleStyled>I do not have an account.</TitleStyled>
        <span>Sign up with your name, email and password.</span>
        <form onSubmit={handleFormSubmit}>
          <FormInput
            label="Your Name"
            name="displayName"
            type="text"
            value={displayName}
            onChange={handleFormInputChange}
            required
          />
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
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={handleFormInputChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </SignUpStyled>
    );
  }
}

export default SignUp;
