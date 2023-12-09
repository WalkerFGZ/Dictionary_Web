import { createContext, useState } from 'react'

import React from 'react'

const DictionaryContext = createContext()

// eslint-disable-next-line react/prop-types
const DictionaryProvider = ({ children }) => {
  const [word, setWord] = useState('')
  const [wordData, setWordData] = useState({})
  const [error, setError] = useState(false)

  return (
    <DictionaryContext.Provider value={{ word, setWord, wordData, setWordData, setError, error }}>{children}</DictionaryContext.Provider>
  )
}

export { DictionaryContext, DictionaryProvider }
