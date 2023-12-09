/* eslint-disable react/prop-types */

import { Box, Em, Flex, Section, Separator, Text } from '@radix-ui/themes'

import React from 'react'

const NounDescription = ({ nounDescription }) => {
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
            {nounDescription?.definitions?.map((item, index) => (
              <li key={index}>{item.definition}</li>
            ))}
          </ul>
          <Text size='4' color='gray' mt='4'>
            Synonyms
            <Text as='span' color='purple' ml='5' style={{ fontFamily: 'var(--heading-font-family)' }}>
              {nounDescription?.synonyms?.join(', ')}
            </Text>
          </Text>
        </Flex>
      </Box>
    </Section>
  )
}

export default NounDescription
