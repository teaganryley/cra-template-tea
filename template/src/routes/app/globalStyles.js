import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default padding */
  ul[class],
  ol[class] {
    padding: 0;
  }

  html {
    font-family: sans-serif;
    background: ${props => props.theme.primary};
  }

  body {
    background: ${props => props.theme.primary};
    margin: 0;
  }

  /* Remove default margin */
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }
  
  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }
  
  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: monospace;
  }
`;

export default GlobalStyles;
