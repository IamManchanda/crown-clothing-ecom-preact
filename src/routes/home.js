import { h } from "preact";
import styled from "styled-components";

import DirectoryMenu from "../components/directory-menu";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => (
  <HomePageStyled>
    <DirectoryMenu />
  </HomePageStyled>
);

export default HomePage;
