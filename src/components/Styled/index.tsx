import { createGlobalStyle } from "styled-components"

export type colorName = ("primary")

interface iTheme {
    primary: string
    dark: string
    lightDark: string
    light: string
    lighter: string
}

declare module 'styled-components' {
    export interface DefaultTheme extends iTheme {}
}

const StyledTheme: iTheme = {
    primary: "rgb(64, 45, 140)",
    dark: "rgb(31, 29, 40)",
    lightDark: "rgb(31, 29, 40, .1)",
    light: "rgb(255, 255, 255)",
    lighter: "rgb(255, 255, 255, .2)",
}

const Global = createGlobalStyle`
    :root {
        ${Object.keys(StyledTheme)
        .map((key) => {
            const kind = typeof StyledTheme[key]
            if (kind === 'string' || kind === 'number')
                return `--${key}: ${StyledTheme[key]};`
            else return ""
        })}
    }
`

export default StyledTheme
export { Global }