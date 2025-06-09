import { GAME_LIST_OPTIONS } from '../constants/filter'

export function Filter({ filter, setFilter }) {
  return (
    <nav className="filter">
      <div className="filter-search">
        <form action="">
          <input type="text" placeholder="Minecraft, Tetris, Half Life..." />
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
