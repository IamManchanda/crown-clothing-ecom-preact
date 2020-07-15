import { h } from "preact";
import { useState } from "preact/hooks";
import { connect } from "react-redux";

import { AuthStyled, TitleStyled, ButtonGroupStyled } from "./auth.styled";
import FormInput from "./form-input";
import CustomButton from "./custom-button";
import { emailSignInStart } from "../store/user/user.actions";
import { EMPTY_SIGN_IN_STATE } from "../constants/empty-auth-state";

const SignIn = ({ emailSignInStart }) => {
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
    <AuthStyled>
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
        </ButtonGroupStyled>
      </form>
    </AuthStyled>
  );
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
