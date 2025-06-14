const API_KEY = '1658013d112e4cfd8f2b2e6a4e799466'

export async function getGames({ search }) {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=1&search=${search}`
    )
    const { results } = await response.json()

    const mappedGames = results?.map((game) => ({
      id: game.id,
      name: game.name,
      image: game.background_image,
    }))

    return mappedGames
  } catch (error) {
    throw new Error(error)
  }
}
