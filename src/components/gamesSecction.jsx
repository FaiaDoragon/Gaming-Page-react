import juegos from './juegos.json'


export const GamesSection = () => {
  return (
    <div className='section'>
          {
            juegos.map(juegos => {
              return (
                <div id="borde">
                  <img key={juegos.id} src={juegos.url} alt={juegos.title} width="225px" height="288px" title={juegos.title} />
                  <h3>{juegos.title}</h3>
                </div>
              )
            })
          }

        </div>
  )
}
