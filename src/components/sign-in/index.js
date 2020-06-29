import React, { Component } from "react";

import "./styles.scss";
import FormInput from "../form-input";
import CustomButton from "../custom-button";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

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
    const { state, methods } = this;
    const { email, password } = state;
    const { handleFormSubmit, handleFormInputChange } = methods;
    return (
      <div className="sign-in">
        <h2>I already have an account.</h2>
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

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
