import React, {createContext} from 'react'
import {ThemeProvider} from 'styled-components/macro'
import {GlobalStyles} from '../styles'
import {theme} from './index'
import {useTheme} from '../hooks'
interface IUiProvider {
    children: any,
    themeName?: string
}

export const UIProviderContext = createContext({} as any)
const UiProvider = (props: IUiProvider) => {
    const {children, themeName} = props
    const [selectedTheme, toggleTheme] = useTheme(themeName || 'default')

    return (
        <UIProviderContext.Provider value={{toggleTheme}}>
            <ThemeProvider theme={selectedTheme === 'default' ? theme.default : theme.dark}>
                <GlobalStyles/>
                <>{children}</>
            </ThemeProvider>
        </UIProviderContext.Provider>
    )
}
export default UiProvider
