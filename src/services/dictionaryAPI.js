const DICTIONARY_API_ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const dictionaryAPI = async (word) => {
  const response = await fetch(`${DICTIONARY_API_ENDPOINT}${word}`)
  .then(response => response.json())
  .catch(error => console.log('Fetch error:' + error))
  return response
}