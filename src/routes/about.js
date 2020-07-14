import { h } from "preact";
import styled from "styled-components";

const AboutStyled = styled.div`
  padding: 56px 20px;
  min-height: 100%;
  width: 100%;
`;

const About = () => (
  <AboutStyled>
    <h1>About</h1>
    <p>This is the About component.</p>
  </AboutStyled>
);

export default About;
