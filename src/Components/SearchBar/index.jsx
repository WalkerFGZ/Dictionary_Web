import { Box, TextField } from '@radix-ui/themes'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'

const SearchBar = () => {
  return (
    <Box>
      <TextField.Root size='3' variant='soft' color='gray'>
        <TextField.Input placeholder='Keyboard...' />
        <TextField.Slot>
          <MagnifyingGlassIcon style={{ width: 16 }} />
        </TextField.Slot>
      </TextField.Root>
    </Box>
  )
}

export default SearchBar
