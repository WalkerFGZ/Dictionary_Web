import { Box, Flex, Switch, Text } from '@radix-ui/themes'

import { BookOpenIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Header = () => {
  const { theme, setTheme } = React.useContext(ThemeContext)
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <Flex align='center' justify='between' my='8'>
      <Box display='flex'>
        <BookOpenIcon style={{ width: 40, marginRight: 10 }} />
        <h1>Dictionary</h1>
      </Box>
      <Box>
        <Text as='label' size='2'>
          <Flex gap='2'>
            <Switch defaultChecked size='1' color='purple' onClick={() => toggleTheme()} /> Theme
          </Flex>
        </Text>
      </Box>
    </Flex>
  )
}
export default Header
