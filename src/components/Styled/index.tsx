import { createGlobalStyle } from "styled-components"

export type colorName = ("primary")

interface iTheme {
    primary: string
}

declare module 'styled-components' {
    export interface DefaultTheme extends iTheme {}
}

const StyledTheme = {
    primary: "rgb(64, 45, 140)"
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