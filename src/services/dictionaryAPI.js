const DICTIONARY_API_ENDPOINT = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const dictionaryAPI = (word) => {
  return fetch(`${DICTIONARY_API_ENDPOINT}${word}`)
  .catch(error => console.log('Fetch error:' + error))
  .then(response => response.json())  
  .then(data => data)
}