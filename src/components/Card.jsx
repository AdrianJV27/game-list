export function Card({
  game,
  toggleFavorites,
  togglePlayed,
  isInPlayed,
  isInFavorites,
}) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={game.image} alt="" />
      </div>
      <h2>{game.name}</h2>
      <div className="card-action">
        <button onClick={() => toggleFavorites(game)}>
          {isInFavorites(game) ? '🩷' : '💔'}
        </button>
        <button onClick={() => togglePlayed(game)}>
          {isInPlayed(game) ? '✅' : '❎'}
        </button>
      </div>
    </div>
  )
}
