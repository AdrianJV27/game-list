export function Card({
  game,
  addToFavorites,
  addToPlayed,
  isInPlayed,
  isInFavorites,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={game.background_image} alt="" />
      </div>
      <h2>{game.name}</h2>
      <div className="card-action">
        <button onClick={() => addToFavorites(game)}>
          {isInFavorites(game) ? '🩷' : '💔'}
        </button>
        <button onClick={() => addToPlayed(game)}>
          {isInPlayed(game) ? '✅' : '❎'}
        </button>
      </div>
    </div>
  )
}
