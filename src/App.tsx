import { Component, ChangeEvent, MouseEvent } from "react";
import PlanetsService from "./services/PlanetsService";
import ContentSection from "./components/ContentSection/ContentSection";
import { Planet } from "./components/PlanetCard/PlanetCard.model";
import Input from "./components/Input/Input";
import "./App.css";
import Button from "./components/Button/Button";

interface AppState {
  inputValue: string;
  planetsList: Planet[];
  loading: boolean;
  error: boolean;
  searchStr: string;
}

const LAST_API_CALL_DATA = "lastApiCall";
const SEARCH_STR = "searchStr";
class App extends Component<Record<string, never>, AppState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      inputValue: "",
      planetsList: [],
      loading: false,
      error: false,
      searchStr: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onThrowError = this.onThrowError.bind(this);
  }

  planetsService = new PlanetsService();

  componentDidMount() {
    const planetsFromStorage = localStorage.getItem(LAST_API_CALL_DATA);
    const searchStrFromStorage = localStorage.getItem(SEARCH_STR);

    if (planetsFromStorage && searchStrFromStorage) {
      this.setState({
        planetsList: JSON.parse(planetsFromStorage),
        searchStr: JSON.parse(searchStrFromStorage),
      });
    } else {
      this.onLoading();
      this.planetsService
        .getAllPlanets()
        .then(this.onDataLoaded)
        .catch(this.onError);
    }
  }

  onDataLoaded = (data: Planet[]) => {
    this.setState({
      planetsList: [...data],
      loading: false,
      error: false,
    });
    localStorage.setItem(LAST_API_CALL_DATA, JSON.stringify(data));
    localStorage.setItem(SEARCH_STR, JSON.stringify(this.state.searchStr));
  };

  onLoading = () => {
    this.setState({
      loading: true,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.onLoading();
    this.setState({ searchStr: this.state.inputValue });
    this.planetsService
      .getSearchResult(this.state.inputValue)
      .then(this.onDataLoaded)
      .catch(this.onError);
  }

  onThrowError() {
    this.setState({ error: true });
  }

  render() {
    const { inputValue, loading, error, planetsList, searchStr } = this.state;

    return (
      <div className="app">
        <section className="search">
          <Input value={inputValue} onChange={this.handleChange} />
          <Button onClick={this.handleSubmit} text="Search" />
          <Button onClick={this.onThrowError} text="Throw Error" />
        </section>
        <ContentSection
          loading={loading}
          error={error}
          planets={planetsList}
          searchStr={searchStr}
        />
      </div>
    );
  }
}

export default App;
