import React from "react";

import { AuthPageStyled } from "./styles";
import SignIn from "../../components/sign-in";
import SignUp from "../../components/sign-up";

const AuthPage = () => (
  <AuthPageStyled>
    <SignIn />
    <SignUp />
  </AuthPageStyled>
);

export default AuthPage;
