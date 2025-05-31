import './App.css'
import { Header } from './components/Header'
import { CardSection } from './components/CardSection'
import { useState } from 'react'
import games from './mocks/games.json'

function App() {
  const gameList = games.results.slice(0, 10)
  const [favorites, setFavorites] = useState([])
  console.log(favorites)
  const addToFavorites = (game) => {
    const isInFavorites = favorites.find((item) => item.id === game.id)
    if (!isInFavorites) {
      setFavorites((prevValue) => [...prevValue, game])
    } else {
      setFavorites((prevValue) =>
        prevValue.filter((item) => item.id !== game.id)
      )
    }
  }

  return (
    <>
      <Header />
      <main>
        <CardSection gameList={gameList} addToFavorites={addToFavorites} />
      </main>
    </>
  )
}

export default App
