import './index.css'
import '@radix-ui/themes/styles.css'

import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme } from '@radix-ui/themes'
import { ThemeProvider } from './Context/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Theme>
        <App />
      </Theme>
    </ThemeProvider>
  </React.StrictMode>
)
