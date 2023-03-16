import React from 'react'
import {ThemeProvider} from 'styled-components/macro'
import {GlobalStyles} from '../styles'

const UiProvider = (props: any) => {
    console.log('UiProvider', props)
    const {children, theme} = props
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <>{children}</>
        </ThemeProvider>
    )
}
export default UiProvider
