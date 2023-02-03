import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import { dictionaryAPI } from '../services/dictionaryAPI';
import { Definition } from './Definition';

export function Search() {
  const [dictionaryAPIResponse, setDictionaryAPIResponse] = useState([
    {
      "word": "hello",
      "phonetic": "həˈləʊ",
      "phonetics": [
        {
          "text": "həˈləʊ",
          "audio": "//ssl.gstatic.com/dictionary/static/sounds/20200429/hello--_gb_1.mp3"
        },
        {
          "text": "hɛˈləʊ"
        }
      ],
      "origin": "early 19th century: variant of earlier hollo ; related to holla.",
      "meanings": [
        {
          "partOfSpeech": "exclamation",
          "definitions": [
            {
              "definition": "used as a greeting or to begin a phone conversation.",
              "example": "hello there, Katie!",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "noun",
          "definitions": [
            {
              "definition": "an utterance of ‘hello’; a greeting.",
              "example": "she was getting polite nods and hellos from people",
              "synonyms": [],
              "antonyms": []
            }
          ]
        },
        {
          "partOfSpeech": "verb",
          "definitions": [
            {
              "definition": "say or shout ‘hello’.",
              "example": "I pressed the phone button and helloed",
              "synonyms": [],
              "antonyms": []
            }
          ]
        }
      ]
    }
  ]);
  const [noDefinition, setNoDefinition] = useState(false)
  const [invalidInput, setInvalidInput] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setInvalidInput(false)
    const word = event.target.search.value;

    dictionaryAPI(word)
      .then(data => {
        console.log(data);
        if (data.isArray) {
          setNoDefinition(false)
          setDictionaryAPIResponse(data)
        } else {
          setNoDefinition(data)
        }
      })
    // event.target.reset();
  }

  return (
    <section className="search-definition">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search for any word...'
          pattern='[a-zA-Z]+'
          className={(invalidInput || noDefinition) ? 'invalid' : ''}
          onInvalid={() => { setInvalidInput(true) }}
          required
        />
        {
          (invalidInput || noDefinition)
          && <p className='invalid-message'>{invalidInput ? 'Whoops, can’t be empty…' : noDefinition ? noDefinition.message : ''}</p>
        }

        <button type='submit' className='btn btn--big'>{<SearchIcon />}</button>
      </form>
      {
        dictionaryAPIResponse &&
        dictionaryAPIResponse.map((data => {
          <Definition data={data} />
        }))
      }
    </section>
  )
}
