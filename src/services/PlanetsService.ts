export default class PlanetsService {
  _url = 'https://swapi.dev/api/planets'
  _basePage = 1

  getResourse = async (url: string) => {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }
    return await res.json()
  }

  getAllPlanets = async () => {
    return await this.getResourse(`${this._url}/?page=1`)
  }

  getSearchResult = async (planetName: string) => {
    const searchParam = planetName.trim()
    const res = await this.getResourse(`${this._url}/?search=${searchParam}`)
    return res.data.results
  }
}
