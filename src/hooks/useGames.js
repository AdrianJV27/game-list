import { useEffect, useState } from 'react'
import { getGames } from '../services/games'

export function useGames() {
  const [allGamesList, setAllGamesList] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getGames().then((data) => {
      setAllGamesList(data)
      setIsLoading(false)
    })
  }, [])

  return { isLoading, allGamesList }
}
