import { h } from "preact";
import styled from "styled-components";

const HomeStyled = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const Home = () => (
  <HomeStyled>
    <h1>Home</h1>
    <p>This is the Home component.</p>
  </HomeStyled>
);

export default Home;
