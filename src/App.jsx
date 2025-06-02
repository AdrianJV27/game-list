import './App.css'
import { Header } from './components/Header'
import { CardSection } from './components/CardSection'
import { useMemo, useRef, useState } from 'react'
import games from './mocks/games.json'
import { Filter } from './components/Filter'
import { useNewList } from './hooks/useNewList'
import { usePersistantList } from './hooks/usePersistantList'

const GAME_LIST_OPTIONS = {
  FAVORITES: 'favorites',
  PLAYED: 'played',
}

function App() {
  const allGamesList = games.results.slice(0, 10)
  const [filter, setFilter] = useState('all')
  const isAllSection = useRef(true)
  const {
    newList: favoritesList,
    isInNewList: isInFavorites,
    setNewList: setFavorites,
    toggleNewList: toggleFavorites,
  } = useNewList()

  const {
    newList: playedList,
    isInNewList: isInPlayed,
    setNewList: setPlayed,
    toggleNewList: togglePlayed,
  } = useNewList()

  usePersistantList('favoritesList', favoritesList, setFavorites)
  usePersistantList('playedList', playedList, setPlayed)

  const gameList = useMemo(() => {
    switch (filter) {
      case GAME_LIST_OPTIONS.FAVORITES:
        isAllSection.current = false
        return favoritesList
      case GAME_LIST_OPTIONS.PLAYED:
        isAllSection.current = false
        return playedList
      default:
        isAllSection.current = true
        return allGamesList
    }
  }, [filter, favoritesList, playedList, allGamesList])

  return (
    <>
      <Header />

      <main>
        <Filter filter={filter} setFilter={setFilter} />
        <CardSection
          gameList={gameList}
          isAllSection={isAllSection}
          toggleFavorites={toggleFavorites}
          togglePlayed={togglePlayed}
          isInPlayed={isInPlayed}
          isInFavorites={isInFavorites}
        />
      </main>
    </>
  )
}

export default App
