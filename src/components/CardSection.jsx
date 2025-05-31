import { Card } from './Card'
export function CardSection({ gameList, addToFavorites }) {
  return (
    <section className="cards-section">
      {gameList.map((game) => (
        <Card addToFavorites={addToFavorites} key={game.id} game={game} />
      ))}
    </section>
  )
}
