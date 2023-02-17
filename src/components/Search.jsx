import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import { dictionaryAPI } from '../services/dictionaryAPI';
import { Definition } from './Definition';

export function Search() {
  const [dictionaryAPIResponse, setDictionaryAPIResponse] = useState([]);
  const [noDefinition, setNoDefinition] = useState(false)
  const [invalidInput, setInvalidInput] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInvalidInput(false)
    const word = event.target.search.value;

    const definition = await dictionaryAPI(word)
      
    if (!Array.isArray(definition)) {
      setNoDefinition(definition)
    } else {
      setNoDefinition(false)
      setDictionaryAPIResponse(definition)
    }
     
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
          autoComplete="off"
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
        dictionaryAPIResponse.map((data, i) => <Definition key={i} data={data} />)
      }
    </section>
  )
}
