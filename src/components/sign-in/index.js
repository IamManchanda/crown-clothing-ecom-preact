import React, { Component } from "react";

import "./styles.scss";
import FormInput from "../form-input";
import CustomButton from "../custom-button";
import { signInWithGoogle } from "../../firebase/utils";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  methods = {
    handleFormSubmit: (event) => {
      event.preventDefault();
      this.setState({
        email: "",
        password: "",
      });
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
      <div className="sign-in">
        <h2 className="title">I already have an account.</h2>
        <span>Sign in with your email and password.</span>
        <form className="sign-in-form" onSubmit={handleFormSubmit}>
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
          <div className="button-group">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
