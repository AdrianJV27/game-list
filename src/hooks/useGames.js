import { useCallback, useEffect, useState } from 'react'
import { getGames as getGamesAPI } from '../services/games'

export function useGames({ search }) {
  const [allGamesList, setAllGamesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGames({ search, page: 1 })
  }, [])

  const getGames = useCallback(async ({ search, page = 1 }) => {
    try {
      setIsLoading(true)
      const result = await getGamesAPI({ search, page })
      if (page > 1) {
        setAllGamesList((prev) => [...prev, ...result])
      } else {
        setAllGamesList(result)
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { isLoading, allGamesList, getGames }
}
