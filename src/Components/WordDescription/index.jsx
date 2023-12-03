import { Box, Section } from '@radix-ui/themes'

import NounDescription from '../NounDescription'
import React from 'react'
import VerbDescription from '../VerbDescription'
import WordAndSound from '../WordAndSound'

const WordDescription = () => {
  return (
    <Section>
      <Box>
        <WordAndSound />
        <NounDescription />
        <VerbDescription />
      </Box>
    </Section>
  )
}
export default WordDescription
