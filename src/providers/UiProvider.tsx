import React, {createContext} from 'react'
import {ThemeProvider} from 'styled-components/macro'
import {GlobalStyles} from '../styles'
// import {theme as themeVersions} from './index'
import {useTheme} from '../hooks'
import { theme } from './theme'
interface IUiProvider {
    children: any,
    themeName?: string
}

export const UIProviderContext = createContext({} as any)
const UiProvider = (props: IUiProvider) => {
    const {children, themeName} = props
    const [selectedTheme, toggleTheme] = useTheme(themeName || 'default')

    return (
        <UIProviderContext.Provider value={{toggleTheme, selectedTheme}}>
            <ThemeProvider theme={selectedTheme === 'default' ? theme.default : theme.dark}>
                <GlobalStyles/>
                {children}
            </ThemeProvider>
        </UIProviderContext.Provider>
    )
}
export default UiProvider
