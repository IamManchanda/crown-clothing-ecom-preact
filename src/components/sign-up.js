import { h } from "preact";
import { useState } from "preact/hooks";
import { connect } from "react-redux";

import { AuthStyled, TitleStyled, ButtonGroupStyled } from "./auth.styled";
import FormInput from "./form-input";
import CustomButton from "./custom-button";
import { EMPTY_SIGN_UP_STATE } from "../constants/empty-auth-state";
import { signUpStart } from "../store/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState(EMPTY_SIGN_UP_STATE);
  const { displayName, email, password, confirmPassword } = userCredentials;
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match.");
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const handleFormInputChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };
  return (
    <AuthStyled>
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
        <ButtonGroupStyled>
          <CustomButton type="submit">Sign Up</CustomButton>
        </ButtonGroupStyled>
      </form>
    </AuthStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
