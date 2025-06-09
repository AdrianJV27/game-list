import './App.css'
import { Header } from './components/Header'
import { CardSection } from './components/CardSection'
import { useMemo, useRef, useState } from 'react'
import { Filter } from './components/Filter'
import { useNewList } from './hooks/useNewList'
import { usePersistantList } from './hooks/usePersistantList'
import { useGames } from './hooks/useGames'
import { GAME_LIST_OPTIONS } from './constants/filter'
function App() {
  const [filter, setFilter] = useState('all')
  const isAllSection = useRef(true)
  const { isLoading, allGamesList } = useGames()

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
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <CardSection
            gameList={gameList}
            isAllSection={isAllSection}
            toggleFavorites={toggleFavorites}
            togglePlayed={togglePlayed}
            isInPlayed={isInPlayed}
            isInFavorites={isInFavorites}
          />
        )}
      </main>
    </>
  )
}

export default App
