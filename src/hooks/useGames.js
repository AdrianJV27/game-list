import { useCallback, useEffect, useState } from 'react'
import { getGames as getGamesAPI } from '../services/games'

export function useGames({ search }) {
  const [allGamesList, setAllGamesList] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGames({ search })
  }, [])

  const getGames = useCallback(async ({ search }) => {
    try {
      const result = await getGamesAPI({ search })
      setAllGamesList(result)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])
  return { isLoading, allGamesList, getGames }
}
