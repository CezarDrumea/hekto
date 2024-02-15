import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
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
    color: ${({ theme }) => theme.black};
  }

  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export default ResetStyles;
