import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  .tabpanel {
    width: 100%;
    height: calc(100vh - 48px);
  }

  .vertical-tab-title {
    font-size: 0.5rem;
  }
`
