import React from 'react'
import {UiProvider, theme} from "rengo-ui-kit";
import App from './App'
import {createRoot} from "react-dom/client"
const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
