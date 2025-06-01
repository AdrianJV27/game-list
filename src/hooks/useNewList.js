import { useState } from 'react'

export function useNewList() {
  const [newList, setNewList] = useState([])

  const isInNewList = (game) => newList.find((item) => item.id === game.id)

  const addToNewList = (game) => {
    if (!isInNewList(game)) {
      setNewList((prevValue) => [...prevValue, game])
    } else {
      setNewList((prevValue) => prevValue.filter((item) => item.id !== game.id))
    }
  }
  return {
    newList,
    isInNewList,
    addToNewList,
  }
}
