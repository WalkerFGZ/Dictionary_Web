/* eslint-disable react/prop-types */

import { Box, Em, Flex, Quote, Section, Separator, Text } from '@radix-ui/themes'

import React from 'react'

const VerbDescription = ({ verbDescription, source }) => {
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
            {verbDescription?.definitions?.map((item, index) => (
              <li key={index}>{item.definition}</li>
            ))}
            {verbDescription?.definitions?.[0]?.example ? <Quote>{verbDescription?.definitions?.[0]?.example}</Quote> : ''}
          </ul>
        </Flex>
        <Separator orientation='horizontal' size='4' mt='5' mb='4' />
        <Text color='gray'>
          Source <Text ml='4'>{source}</Text>
        </Text>
      </Box>
    </Section>
  )
}

export default VerbDescription
