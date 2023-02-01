import { useState } from 'react';
import { dictionaryAPI } from '../services/dictionaryAPI';

export function Search() {
  const [dictionaryAPIResponse, setDictionaryAPIResponse] = useState([]);
  const [invalidInput, setInvalidInput] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setInvalidInput(false)
    const word = event.target.url.value;

    dictionaryAPI(word)
      .then(data => setDictionaryAPIResponse(data))

    console.log(dictionaryAPIResponse);

    // event.target.reset();
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search for any word...'
          pattern='[a-zA-Z]+'
          onInvalid={() => { setInvalidInput(true) }}
          required
        />
        {
          invalidInput && <p className='invalid-message'>Whoops, can’t be empty…</p>
        }
        <button type='submit' className='btn btn--big'>Shorten It!</button>
      </form>
    </section>
  )
}
