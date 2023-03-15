import CasperUiProvider from './CasperUiProvider'
import { darkTheme, defaultTheme } from '../styles'
import Button from "../components";

interface theme {
    default: any
    dark: any
}

const theme: theme = {
    default: defaultTheme,
    dark: darkTheme
}

export { Button, CasperUiProvider, theme }
