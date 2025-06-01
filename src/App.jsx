import './App.css'
import { Header } from './components/Header'
import { CardSection } from './components/CardSection'
import { useMemo, useState } from 'react'
import games from './mocks/games.json'
import { Filter } from './components/Filter'
import { useNewList } from './hooks/useNewList'

function App() {
  const allGamesList = games.results.slice(0, 10)
  const [filter, setFilter] = useState('all')

  const {
    newList: favoritesList,
    isInNewList: isInFavorites,
    addToNewList: addToFavorites,
  } = useNewList()

  const {
    newList: playedList,
    isInNewList: isInPlayed,
    addToNewList: addToPlayed,
  } = useNewList()

  const gameList = useMemo(() => {
    switch (filter) {
      case 'favorites':
        return favoritesList
      case 'played':
        return playedList
      default:
        return allGamesList
    }
  }, [filter, favoritesList, playedList, allGamesList])

  return (
    <>
      <Header />
      <main>
        <Filter setFilter={setFilter} />
        <CardSection
          gameList={gameList}
          addToFavorites={addToFavorites}
          addToPlayed={addToPlayed}
          isInPlayed={isInPlayed}
          isInFavorites={isInFavorites}
        />
      </main>
    </>
  )
}

export default App
