import { createGlobalStyle } from 'styled-components';
import { colors } from '../styles';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border:0;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: Arial,Helvetica,sans-serif;
    background-color: ${colors.secondary};
  }
`;

export default GlobalStyle;
