import { ChangeEvent, useState, MouseEvent } from "react";
import {
  Button,
  ErrorBoundary,
  Input,
  PlanetsList,
  Spinner,
  Switcher,
} from "../../shared";
import styles from "./MainPage.module.css";
import { Outlet, useNavigation } from "react-router-dom";
import { Portal } from "../../shared/Portal";
import { useThemeContext } from "../../../utils/useThemeContext";

export const SEARCH_STR = "searchStr";
export const PLANETS_DATA = "planets";

export const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const navigation = useNavigation();
  const { theme } = useThemeContext();

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
      <div
        className={`${styles.wrapper} ${theme === "light" ? styles.light : styles.dark}`}>
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
          <Switcher />
        </section>

        <ErrorBoundary>
          <section className={styles.content}>
            <PlanetsList />
          </section>
        </ErrorBoundary>
      </div>
      <Portal />
    </>
  );
};
