import React, {createContext, useState, useEffect} from 'react'
import {ThemeProvider} from 'styled-components/macro'
import {GlobalStyles} from '../styles'
import { theme } from './theme'
interface IUiProvider {
    children: any,
    themeName?: string
}

export const UIProviderContext = createContext({} as any)

const UiProvider = (props: IUiProvider) => {
  const {children, themeName} = props
  const [selectedTheme, setSelectedTheme] = useState<string>('default');

  const toggleTheme = (theme: string) => {
    setSelectedTheme(theme)
  }

    useEffect(() => {
      if (!themeName) {
        return
      }
      toggleTheme(themeName as string)
  }, [themeName])

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
