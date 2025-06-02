import { useEffect, useRef } from 'react'

export function usePersistantList(listName, list, setList) {
  const isLoaded = useRef(false)
  useEffect(() => {
    const localStorageValue = localStorage.getItem(listName)
    if (localStorageValue && !isLoaded.current) {
      setList(JSON.parse(localStorageValue))
      isLoaded.current = true
    } else {
      localStorage.setItem(listName, JSON.stringify(list))
    }
  }, [listName, list, setList])
}
