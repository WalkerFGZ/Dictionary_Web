import { Box, Flex, Section, Text } from '@radix-ui/themes'

import { DictionaryContext } from '../../Context/DictionaryContext'
import NounDescription from '../NounDescription'
import React from 'react'
import VerbDescription from '../VerbDescription'
import WordAndSound from '../WordAndSound'

const WordDescription = () => {
  const { error, wordData } = React.useContext(DictionaryContext)
  const audio = wordData?.phonetics?.filter((item) => item.audio !== '')[0]?.audio || ''
  const sound = new Audio(audio)
  const nounText = wordData?.meanings?.filter((item) => item.partOfSpeech === 'noun')[0] || ''
  const verbText = wordData?.meanings?.filter((item) => item.partOfSpeech === 'verb')[0] || ''
  const source = wordData?.sourceUrls?.[0] || ''
  return (
    <Section width='100%'>
      {wordData.length == 0 ? (
        <Flex direction='column' justify='center'>
          <Text size='4' color='purple' mt='4' style={{ textAlign: 'center', letterSpacing: '6px', fontWeight: 'bold' }}>
            {error ? 'Could not find the word you were looking for' : 'Start searching for a word'}
          </Text>
        </Flex>
      ) : (
        <Box>
          <WordAndSound word={wordData.word} phonetic={wordData.phonetic} sound={sound} />
          <NounDescription nounDescription={nounText} />
          <VerbDescription verbDescription={verbText} source={source} />
        </Box>
      )}
    </Section>
  )
}
export default WordDescription
