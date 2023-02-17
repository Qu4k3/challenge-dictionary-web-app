import { ReactComponent as PlayIcon } from '../assets/icon-play.svg';
import { ReactComponent as NewWindowIcon } from '../assets/icon-new-window.svg';

export function Definition({ data }) {

  const handlePlay = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play()
  }

  return (
    <section className="definition">
      <div className="definition__word">
        <div className="word__text">
          <h1>{data.word}</h1>
          <h4>{data.phonetic}</h4>
        </div>
        {data?.phonetics[2]?.audio &&
          <div className="word__audio">
            <button onClick={() => handlePlay(data.phonetics[2].audio)}>
              <PlayIcon />
            </button>
          </div>
        }
      </div>

      {
        data.meanings.map(meaning => (
          <div className='definition__meaning'>
            <div className='meaning__part-of-speech'><span>{meaning.partOfSpeech}</span></div>
            <h5>Meaning</h5>
            <ul>
              {meaning.definitions.map(definition => (
                <li><p>{definition.definition}</p>{definition.example && <p className='definition--alt'>"{definition.example}"</p>}</li>
              ))
              }
            </ul>
            {(meaning.synonyms.length > 0) &&
              <div className='meaning__synonyms'>
                <h5>Synonyms</h5>
                <span>{meaning.synonyms}</span>
              </div>}
          </div>
        ))
      }

      <div className="definition__source">
        <span>Source</span>
        {
          data.sourceUrls.map(source => (
            <>
              <span className='source__links'>
                <a href={source} alt="source">{source}</a>
                <NewWindowIcon />
              </span>
            </>
          ))
        }
      </div>
    </section>
  )
}