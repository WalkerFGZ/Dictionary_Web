import { Box, TextField } from '@radix-ui/themes'
import React, { useEffect } from 'react'

import { DictionaryContext } from '../../Context/DictionaryContext'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import useFetchWord from '../../Hooks/useFetchWord'

const SearchBar = () => {
  const { word, setWord, setWordData, setError } = React.useContext(DictionaryContext)
  const { error, data, fetchWord } = useFetchWord()

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      fetchWord(event.target.value)
    }
  }

  useEffect(() => {
    setWordData(data[0] || [])
    setError(error)
  }, [data])

  const handleOnChange = (event) => {
    setWord(event.target.value)
  }
  return (
    <Box>
      <TextField.Root size='3' variant='soft' color='gray'>
        <TextField.Input
          placeholder='Keyboard...'
          onKeyDown={() => handleKeyDown(event)}
          value={word}
          onChange={() => handleOnChange(event)}
        />
        <TextField.Slot>
          <MagnifyingGlassIcon style={{ width: 16 }} />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  )
}

export default SearchBar
