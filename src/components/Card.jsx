import { useState } from 'react'

export function Card({ name, background_image }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isPlayed, setIsPlayed] = useState(false)

  const isFavoriteHandle = () => {
    setIsFavorite(!isFavorite)
  }

  const isPlayedHandle = () => {
    setIsPlayed(!isPlayed)
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={background_image} alt="" />
      </div>
      <h2>{name}</h2>
      <div className="card-action">
        <button onClick={isFavoriteHandle}>{isFavorite ? '🩷' : '💔'}</button>
        <button onClick={isPlayedHandle}>{isPlayed ? '✅' : '❎'}</button>
      </div>
    </div>
  )
}
