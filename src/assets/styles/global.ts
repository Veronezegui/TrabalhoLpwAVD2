import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }

  body {
    font: 18px 'Roboto' sans-serif;
    background: #eeeeee;
    width: 100vw;
    height: 100vh;
  }

  #app {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
  }
`;
