import React from 'react'

import ReactDOM from 'react-dom/client'

import { App } from './app'
import './styles/resetBrowserStyles.css'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(<App />)
}
