import { Component, ChangeEvent, MouseEvent } from 'react'
import PlanetsService from './services/PlanetsService'
import ContentSection from './components/ContentSection/ContentSection'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import { Planet } from './components/PlanetCard/PlanetCard.model'
import './App.css'

interface AppState {
  inputValue: string;
  planetsList: Planet[];
  loading: boolean;
  error: boolean;
}

const LAST_API_CALL = 'lastApiCall'
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
    const dataFromStorage = localStorage.getItem(LAST_API_CALL)
    if(dataFromStorage){
      this.setState({
        planetsList: JSON.parse(dataFromStorage)
      })
    } else {
    this.onLoading()  
    this.planetsService
      .getAllPlanets()
      .then(this.onDataLoaded)
      .catch(this.onError)
    }
  }

  onDataLoaded = (data: Planet[]) => {
    this.setState({
      planetsList: [...data],
      loading: false,
      error: false,
    })
    localStorage.setItem(LAST_API_CALL, JSON.stringify(data))
  }

  onLoading = () => {
    this.setState({
      loading: true,
    })
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
    this.onLoading()  
    this.planetsService
      .getSearchResult(this.state.inputValue)
      .then(this.onDataLoaded)
      .catch(this.onError)
  }

  render() {
    const {inputValue, loading, error, planetsList} = this.state;

    return (
      
      <div className="app">
        <section className="search">
          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={this.handleChange}
          />
          <button className="search-button" onClick={this.handleSubmit}>
            Search
          </button>
        </section>
        <ErrorBoundary>
          <ContentSection loading={loading} error={error} planets={planetsList} />
        </ErrorBoundary>
      </div>
    )
  }
}

export default App
