import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --maxWidth: 1280px;
  --white: white;
  --lightgrey: lightgrey;
  --medGray: gray;
  --darkGray: darkGray;
  --fontSuperBig: 2.5rem;
  --fontBig: 1,5rem;
  --fontMedium: 1.2rem;
  --fontSmall: 1rem;
}

* {
  box-sizing: border-box;
  font-family: monospace;
}

body {
  margin: 0
  padding: 0
}

h1 {
  font-size: 2rem;
  font-weight: 600;
  color: var(--white);
}
h3 {
  font-size: 1.3rem;
  font-weight: 600;
}
p {
  font-size: 1rem;
  color: var(--white);
}`;