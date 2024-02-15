import { createGlobalStyle } from 'styled-components';

const ColorVars = createGlobalStyle`
  :root {
    --black: #101750;
    --grey-3: #8A8FB9;
    --grey-2: #E5E0FC;
    --grey-1: #F8F8FD;
    --white: #FFFFFF

    --primary: #FB2E86;
    --primary-dark: #F0056A;
    --primary-light: #FC5FA2;

    --secondary: #F9BA00;
    --secondary-ligth: #FFF3CE;

    --tertiary: #7E33E0;

    --danger: #FB2448;
    --danger-lgith: #FEB9C4;

    --info: #603EFF;
    --info-light: #DDD6FF;

    --success: #0CC562;
    --success-dark: #00994C;
    --success-light: #92F2BF;
  }
`;

export default ColorVars;
