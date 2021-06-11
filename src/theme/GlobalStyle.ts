import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    word-wrap: break-word;
  }

  html {
    line-height: 1.6;
    position: relative;
    min-height: 100%;
  }

  body {
    font-family: 'Roboto Light', sans-serif;
  }

  button, input {
    cursor: pointer;
    color: #292929;
    border-color: #292929;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #292929;
  }
`;

export default GlobalStyle;