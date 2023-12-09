import { useState } from 'react'

const useFetchWord = () => {
  const [data, setData] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchWord = async (word) => {
    if (!word) {
      setData([])
      setError(false)
      return null
    }
    try {
      setLoading(true)
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      const data = await response.json()
      setData(data)
      setLoading(false)
      setError(false)
    } catch (error) {
      setError(true)
      setData([])
    }
  }

  return { data, error, loading, fetchWord }
}

export default useFetchWord
