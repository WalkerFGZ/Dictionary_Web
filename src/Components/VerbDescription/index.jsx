import { Box, Em, Flex, Quote, Section, Separator, Text } from '@radix-ui/themes'

import React from 'react'

const VerbDescription = () => {
  return (
    <Section pt='6' pb='0'>
      <Box>
        <Flex align='center' gap='5'>
          <Text weight='bold' size='4'>
            <Em>Verb</Em>
          </Text>
          <Separator orientation='horizontal' size='4' />
        </Flex>
        <Flex direction='column'>
          <Text size='4' color='gray' mt='4'>
            Meaning
          </Text>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: 40, marginTop: 20 }}>
            <li>etc, a set of keys used to operate a typewriter, computer etc</li>
            <Quote>Keyboard is the par of this job i hate the most</Quote>
          </ul>
        </Flex>
        <Separator orientation='horizontal' size='4' mt='5' mb='4' />
        <Text color='gray'>
          Source <Text ml='4'>https://en.wikionary.org/wiki/keyboard </Text>
        </Text>
      </Box>
    </Section>
  )
}

export default VerbDescription
