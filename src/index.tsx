import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import { CasperUiProvider, theme } from './providers'
const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
    <React.StrictMode>
        <CasperUiProvider theme={theme.default}>
            <App />
        </CasperUiProvider>
    </React.StrictMode>
)
