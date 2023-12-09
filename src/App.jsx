import './App.css'

import { Box, Container, Theme } from '@radix-ui/themes'

import { DictionaryProvider } from './Context/DictionaryContext'
import Header from './Components/Header'
import React from 'react'
import SearchBar from './Components/SearchBar'
import WordDescription from './Components/WordDescription'

function App() {
  return (
    <Theme
      appearance='dark'
      style={{
        minHeight: '100vh'
      }}
    >
      <Container size='2'>
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
