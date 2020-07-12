import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import FormInput from "./form-input";
import CustomButton from "./custom-button";
import { EMPTY_SIGN_UP_STATE } from "../constants/empty-auth-state";
import { signUpStart } from "../store/user/user.actions";

const SignUpStyled = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

const TitleStyled = styled.h2`
  margin: 10px 0;
`;

class SignUp extends Component {
  state = { ...EMPTY_SIGN_UP_STATE };

  methods = {
    handleFormSubmit: async (event) => {
      event.preventDefault();
      const {
        state: { displayName, email, password, confirmPassword } = {},
        props: { signUpStart } = {},
      } = this;
      if (password !== confirmPassword) {
        alert("Password don't match.");
        return;
      }
      signUpStart({ displayName, email, password });
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

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
