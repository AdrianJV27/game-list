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
          onClick={() => setFilter('all')}
        >
          Todos
        </span>
        <span
          className={filter === 'favorites' ? 'active' : ''}
          onClick={() => setFilter('favorites')}
        >
          Favoritos
        </span>
        <span
          className={filter === 'played' ? 'active' : ''}
          onClick={() => setFilter('played')}
        >
          Jugados
        </span>
      </div>
    </nav>
  )
}
