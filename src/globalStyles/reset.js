import { createGlobalStyle } from 'styled-components';

export const ResetStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');

  :root {
    --black: #101750;
  }


  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    color: inherit;
    font-family: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    color: var(--black);
  }

  a:link,
  a:visited {
    color: inherit;
  }

`;
