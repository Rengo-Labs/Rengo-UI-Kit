import React from 'react'
import {ThemeProvider} from 'styled-components/macro'
import {GlobalStyles} from '../styles'

const CasperUiProvider = (props: any) => {
    const {children, theme} = props
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <>{children}</>
        </ThemeProvider>
    )
}

export default CasperUiProvider
