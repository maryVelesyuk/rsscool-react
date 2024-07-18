import { ChangeEvent, useState, MouseEvent } from "react";
import {
  Button,
  ErrorBoundary,
  Input,
  PlanetsList,
  Spinner,
} from "../../shared";
import styles from "./MainPage.module.css";
import { Outlet, useNavigation } from "react-router-dom";

export const SEARCH_STR = "searchStr";
export const PLANETS_DATA = "planets";

export const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation();

  // const [trigger] = useLazyGetPlanetsBySearchParamQuery();
  // const [planetsFromLS, setPlanetsToLS] = useLocalStorage(PLANETS_DATA);
  // const [searchStrFromLS, setSearcgStrToLS] = useLocalStorage(SEARCH_STR);
  // const { loading, error, getPlanetsData, getSearchRes } = usePlanetsService();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // getSearchRes(inputValue).then((data) => {
    //   setPlanets(data.results);
    //   setPlanetsToLS(data.results);
    // });
    // setSearcgStrToLS(inputValue);
  };

  return (
    <>
      <Outlet />
      <div className={styles.wrapper}>
        {navigation.state === "loading" && (
          <div className={styles.fade}>
            <Spinner />
          </div>
        )}
        <section className={styles.search}>
          <Input
            value={inputValue}
            onChange={onChange}
            placeholder="search..."
          />
          <Button type="primary" onClick={onSearchClick} text="Search" />
        </section>
        <ErrorBoundary>
          <section className={styles.content}>
            <PlanetsList />
          </section>
        </ErrorBoundary>
      </div>
    </>
  );
};
