import { useRef } from 'react'
import { GAME_LIST_OPTIONS } from '../constants/filter'
import { preventDef } from '../services/preventDefault'
export function Filter({ filter, setFilter, search, setSearch, getGames }) {
  const isEnterPressed = useRef(false)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !isEnterPressed.current) {
      getGames({ search })
      setFilter(GAME_LIST_OPTIONS.ALL)
      isEnterPressed.current = true
    }
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' && isEnterPressed.current) {
      isEnterPressed.current = false
    }
  }

  return (
    <nav className="filter">
      <div className="filter-search">
        <form onSubmit={preventDef} action="">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            type="text"
            placeholder="Minecraft, Tetris, Half Life..."
          />
          <div className="filter-lines">
            <div className="filter-line"> </div>
            <div className="filter-line-two"> </div>
          </div>
        </form>
      </div>
      <div className="filter-actions">
        <span
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter(GAME_LIST_OPTIONS.ALL)}
        >
          Todos
        </span>
        <span
          className={filter === 'favorites' ? 'active' : ''}
          onClick={() => setFilter(GAME_LIST_OPTIONS.FAVORITES)}
        >
          Favoritos
        </span>
        <span
          className={filter === 'played' ? 'active' : ''}
          onClick={() => setFilter(GAME_LIST_OPTIONS.PLAYED)}
        >
          Jugados
        </span>
      </div>
    </nav>
  )
}
