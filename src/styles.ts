import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  coral: '#E66767',
  creme: '#FFEBD9',
  branco2: '#FFF8F2',
  preto: '#4B4B4B'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.branco2};
    color: ${cores.branca};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }

  .no-scroll {
    overflow: hidden;
  }
`
