import { useState } from 'react'
import { Card } from './Card'
import { useLocalSearch } from '../hooks/useLocalSearch'
import { LocalSearch } from './LocalSearch'
export function CardSection({
  gameList,
  isAllSection,
  toggleFavorites,
  togglePlayed,
  isInPlayed,
  isInFavorites,
}) {
  const [search, setSearch] = useState('')
  const { searchedList } = useLocalSearch(gameList, search)

  return (
    <section>
      {!isAllSection.current && (
        <aside className="card-inside-filter">
          {/* Orden de Valoracion */}
          {/* Search */}
          {/* Tiene un comentario */}
          {/* etc */}
          <LocalSearch search={search} setSearch={setSearch} />
        </aside>
      )}

      <section className="cards-section">
        {searchedList.map((game) => (
          <Card
            key={game.id}
            game={game}
            toggleFavorites={toggleFavorites}
            togglePlayed={togglePlayed}
            isInPlayed={isInPlayed}
            isInFavorites={isInFavorites}
          />
        ))}
      </section>
    </section>
  )
}
