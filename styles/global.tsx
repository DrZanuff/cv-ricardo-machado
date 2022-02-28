import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), url(/fonts/Rubik/Rubik-Regular.ttf) format('ttf');
}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik';
  }


  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`
