import { Component } from 'react'
import { Planet } from '../PlanetCard/PlanetCard.model'
import PlanetCard from '../PlanetCard/PlanetCard'
import './ContentSection.css'

interface ContentSectionProps {
  loading: boolean
  error: boolean
  planets: Planet[]
  searchStr: string
}

export default class ContentSection extends Component<ContentSectionProps> {
  render() {
    const { loading, error, planets, searchStr } = this.props
    if (error) {
      throw new Error('Something went wrong!')
    }

    const searchResult = planets.length ? (
      planets.map((planet) => (
        <PlanetCard key={planet.name} planetInfo={planet} />
      ))
    ) : (
      <p>No result found for the query "{searchStr}"</p>
    )

    return (
      <section className="content">
        <h2 className="content-title">Planets of the world The Star Wars</h2>
        {searchStr && (
          <h4 className="search-title">Search results for "{searchStr}"</h4>
        )}
        <div className="content-body">
          {loading ? <p>Loading...</p> : searchResult}
        </div>
      </section>
    )
  }
}
