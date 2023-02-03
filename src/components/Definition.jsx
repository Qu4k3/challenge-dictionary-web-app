export function Definition({data}) {

  return (
    <section className="definition">
      <div className="word">
        <div className="word__text">
          <h2>{data.word}</h2>
          <h4>{data.phonetic}</h4>
        </div>
        <div className="word__audio">
          <audio src={data.phonetic[0].audio}></audio>
        </div>
      </div>
    </section>
  )
}