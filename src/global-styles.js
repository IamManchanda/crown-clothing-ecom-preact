import styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  body {
    margin: 0;
    font-family: "Open Sans Condensed", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 20px 60px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyles;
