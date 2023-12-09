/* eslint-disable react/prop-types */

import { createContext, useState } from 'react'

import React from 'react'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }
