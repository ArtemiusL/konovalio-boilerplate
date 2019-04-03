import { createGlobalStyle } from 'styled-components/macro';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #react-view {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 320px;
    background-color: transparent;
  }

  body {
    font-family: 'Sentinel medium', Arial, Helvetica, sans-serif;
    font-weight: 500;
    font-smoothing: antialiased; /* stylelint-disable-line property-no-unknown */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font-size: 10px;
    overscroll-behavior: none;
    overflow-y: scroll;
    overflow-x: hidden;
  }`;
