export function LocalSearch({ search, setSearch }) {
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
  }
  return (
    <section className="local-search">
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <input
          placeholder="Minecraft, Tetris, Half Life..."
          onChange={handleChange}
          value={search}
          type="text"
        />
        <div className="filter-lines">
          <div className="filter-line"> </div>
          <div className="filter-line-two"> </div>
        </div>
      </form>
    </section>
  )
}
