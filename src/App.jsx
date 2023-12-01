import './App.css'

import { Button, Flex, Text, Theme } from '@radix-ui/themes'

import React from 'react'

function App() {
  return (
    <Theme>
      <Flex direction='column' gap='2'>
        <Text>Hello from Radix Themes :)</Text>
        <Button>Lets go</Button>
      </Flex>
    </Theme>
  )
}

export default App
