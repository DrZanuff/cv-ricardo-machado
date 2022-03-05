import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@font-face {
  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Rubik'), url(/fonts/Rubik/Rubik-Regular.ttf) format('ttf');
}

/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: black;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #00C080;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #00C080;
}

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Rubik';
    scroll-behavior: smooth;
  }


  a {
    color: inherit;
    text-decoration: none;
    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }

  * {
    box-sizing: border-box;
  }
`
