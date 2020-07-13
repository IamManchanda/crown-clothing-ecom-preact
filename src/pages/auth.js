import React from "react";
import styled from "styled-components";

import SignIn from "../components/sign-in";
import SignUp from "../components/sign-up";

const AuthPageStyled = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 991px) {
    width: 100%;
    flex-direction: column;
  }
`;

const AuthPage = () => (
  <AuthPageStyled>
    <SignIn />
    <SignUp />
  </AuthPageStyled>
);

export default AuthPage;
