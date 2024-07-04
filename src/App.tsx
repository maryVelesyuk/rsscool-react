import { Component, ChangeEvent, MouseEvent } from 'react'
import PlanetsService from './services/PlanetsService'
import './App.css'
import PlanetCard from './components/PlanetCard/PlanetCard'
import { Planet } from './components/PlanetCard/PlanetCard.model'

interface AppState {
  inputValue: string
  planetsList: Planet[]
  loading: boolean
  error: boolean
}
class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = {
      inputValue: '',
      planetsList: [],
      loading: false,
      error: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  planetsService = new PlanetsService()

  componentDidMount() {
    this.setState({
      loading: true,
    })
    this.planetsService
      .getAllPlanets()
      .then((data) =>
        this.setState({
          planetsList: [...data.results],
          loading: false,
          error: false,
        })
      )
      .catch(this.onError)
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value })
  }

  handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
  }

  render() {
    return (
      <div className="app">
        <section className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button className="search-button" onClick={this.handleSubmit}>
            Search
          </button>
        </section>
        <section className="content">
          {this.state.planetsList.map((planet) => (
            <PlanetCard planetInfo={planet} />
          ))}
        </section>
      </div>
    )
  }
}

export default App
