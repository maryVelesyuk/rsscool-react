import { Component } from 'react'
import { Planet } from '../PlanetCard/PlanetCard.model';
import PlanetCard from '../PlanetCard/PlanetCard';
import './ContentSection.css'

interface ContentSectionProps {
  loading: boolean;
  error: boolean;
  planets: Planet[];
}

export default class ContentSection extends Component<ContentSectionProps> {
  render() {
    const { loading, error, planets } = this.props;
    if (error) {
      throw new Error('I crashed!');
    }

    return (
      <section className="content">
          <h2 className="content-title">Planets of the world The Star Wars</h2>
          <div className="content-body">
            {loading ? (
              <p>Loading...</p>
            ) : (
              planets.map((planet) => (
                <PlanetCard key={planet.name} planetInfo={planet} />
              ))
            )}
          </div>
        </section>
    )
  }
}
