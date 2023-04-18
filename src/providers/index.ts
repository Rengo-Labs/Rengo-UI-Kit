import UiProvider, { UIProviderContext } from './UiProvider'
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
    theme,
    UIProviderContext,
    UiProvider,
}
