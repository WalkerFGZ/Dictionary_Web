import { Box, Flex, Heading, Text, Tooltip } from '@radix-ui/themes'

import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const WordAndSound = () => {
  return (
    <Flex align='center' justify='between'>
      <Box>
        <Heading weight='bold' mb='5' style={{ fontSize: 45, fontFamily: 'var(--default-font-family)' }}>
          Keyboard
        </Heading>
        <Text as='span' color='purple' size='5' style={{ fontFamily: 'var(--heading-font-family)' }}>
          /ˈkiː.bɔːrd/
        </Text>
      </Box>
      <Box>
        <Tooltip content='listen'>
          <PlayCircleIcon style={{ width: 70, color: '#c69cfc', cursor: 'pointer' }} />
        </Tooltip>
      </Box>
    </Flex>
  )
}

export default WordAndSound
