import { Card } from './Card'
import games from '../mocks/games.json'
export function CardSection() {
  const gameList = games.results.slice(0, 10)
  console.log(gameList[1].background_image)

  return (
    <section className="cards-section">
      {gameList.map(({ id, name, background_image }) => (
        <Card key={id} name={name} background_image={background_image} />
      ))}
    </section>
  )
}
