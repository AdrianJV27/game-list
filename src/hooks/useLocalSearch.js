import { useMemo } from 'react'

export function useLocalSearch(list, search) {
  const searchedList = useMemo(
    () =>
      search.trim()
        ? [...list].filter((item) =>
            item.name.toLowerCase().includes(search.trim().toLowerCase())
          )
        : list,
    [list, search]
  )

  return { searchedList }
}
