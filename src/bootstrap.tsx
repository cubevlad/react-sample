import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from './app'
import './styles/resetBrowserStyles.css'

const root = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(root).render(<App />)
