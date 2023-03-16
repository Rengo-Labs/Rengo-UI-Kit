import UiProvider from './UiProvider'
import { darkTheme, defaultTheme } from '../styles'

interface theme {
    default: any
    dark: any
}

const theme: theme = {
    default: defaultTheme,
    dark: darkTheme
}

export {
    UiProvider,
    theme
}
