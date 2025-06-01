import { Card } from './Card'
export function CardSection({
  gameList,
  addToFavorites,
  addToPlayed,
  isInPlayed,
  isInFavorites,
}) {
  return (
    <section className="cards-section">
      {gameList.map((game) => (
        <Card
          key={game.id}
          game={game}
          addToFavorites={addToFavorites}
          addToPlayed={addToPlayed}
          isInPlayed={isInPlayed}
          isInFavorites={isInFavorites}
        />
      ))}
    </section>
  )
}
