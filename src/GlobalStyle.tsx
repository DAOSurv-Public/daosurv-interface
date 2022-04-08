import { Global, css } from "@emotion/react"

const styles = css`
  html,
  body {
    height: 100%;
    min-height: 100vh;
    padding: 0;
  }
`

export const GlobalStyle = () => <Global styles={styles} />
