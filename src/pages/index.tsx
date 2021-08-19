import * as React from "react"
import { ThemeProvider } from "styled-components"
import Nav from "../components/Nav/Nav"
import StyledTheme, { Global } from "../components/Styled"
import '../sass/main.sass'


const IndexPage = () => {
  return (
    <main>
      <ThemeProvider theme={StyledTheme}>
        <Global />
        <Nav />
      </ThemeProvider>
    </main>
  )
}

export default IndexPage
