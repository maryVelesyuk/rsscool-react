import { Component } from 'react'
import './PlanetCard.css'
import { Planet } from './PlanetCard.model'

interface IPlanetCard {
  planetInfo: Planet
}

export default class PlanetCard extends Component<IPlanetCard> {
  render() {
    const { name, rotation_period, diameter, climate, gravity } =
      this.props.planetInfo
    return (
      <div className="card">
        <h3 className="card-title">Planet: {name}</h3>
        <p className="card-info">Rotation period: {rotation_period}</p>
        <p className="card-info">Diameter: {diameter}</p>
        <p className="card-info">Climate: {climate}</p>
        <p className="card-info">Gravity: {gravity}</p>
      </div>
    )
  }
}
