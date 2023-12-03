import { Box, Em, Flex, Section, Separator, Text } from '@radix-ui/themes'

import React from 'react'

const NounDescription = () => {
  return (
    <Section pt='7' pb='0'>
      <Box>
        <Flex align='center' gap='5'>
          <Text weight='bold' size='4'>
            <Em>Noun</Em>
          </Text>
          <Separator orientation='horizontal' size='4' />
        </Flex>
        <Flex direction='column'>
          <Text size='4' color='gray' mt='4'>
            Meaning
          </Text>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginLeft: 40, marginTop: 20 }}>
            <li>etc, a set of keys used to operate a typewriter, computer etc</li>
            <li>
              A component of many instruments including the piano, organ and hapsichord consisting of usually black white keys that cause
              different tones to be produced when strucks
            </li>
            <li>
              A device with keys of a musical keyboard, used to control electronic sound-producing devides wich may be built into or
              separewte from the keyboard device
            </li>
          </ul>
          <Text size='4' color='gray' mt='4'>
            Synonyms
            <Text as='span' color='purple' ml='6' style={{ fontFamily: 'var(--heading-font-family)' }}>
              electronic keyboard
            </Text>
          </Text>
        </Flex>
      </Box>
    </Section>
  )
}

export default NounDescription
