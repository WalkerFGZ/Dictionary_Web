import './App.css'

import { Box, Container, Theme } from '@radix-ui/themes'

import { DictionaryProvider } from './Context/DictionaryContext'
import Header from './Components/Header'
import React from 'react'
import SearchBar from './Components/SearchBar'
import { ThemeContext } from './Context/ThemeContext'
import WordDescription from './Components/WordDescription'

const App = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <Theme
      appearance={theme}
      style={{
        minHeight: '100vh'
      }}
    >
      <Container size='2' px={{ initial: '3' }}>
        <Box>
          <Header />
          <DictionaryProvider>
            <SearchBar />
            <WordDescription />
          </DictionaryProvider>
        </Box>
      </Container>
    </Theme>
  )
}
export default App
