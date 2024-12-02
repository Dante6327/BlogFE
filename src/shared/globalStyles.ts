import { createGlobalStyle } from "styled-components";
import nomalize from "styled-normalize";
import Moneygraphy from "../assets/fonts/Moneygraphy.woff2";
export const GlobalStyle = createGlobalStyle`
  ${nomalize}
  @font-face {
    font-family: "MoneygraphyPixel";
    font-style: normal;
    src: url(${Moneygraphy}) format("woff2");
    font-style: normal;
  }
  html {
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;    
  }
  body {
    font-family: "MoneygraphyPixel";
    width: 1024px;
    margin: 0 auto;
    ul {
      list-style:none;
    }
  }
`;
