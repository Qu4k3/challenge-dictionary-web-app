const DICTIONARY_API_ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const dictionaryAPI = async (word) => {
  const response = await fetch(`${DICTIONARY_API_ENDPOINT}${word}`)
  const data = await response.json()
  return data
}