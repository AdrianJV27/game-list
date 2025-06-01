export function Filter({ setFilter }) {
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
        <span onClick={() => setFilter('all')}>Todos</span>
        <span onClick={() => setFilter('favorites')}>Favoritos</span>
        <span onClick={() => setFilter('played')}>Jugados</span>
      </div>
    </nav>
  )
}
