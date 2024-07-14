import { ChangeEvent, useEffect, useState, MouseEvent } from "react";
import { Button, ErrorBoundary, Input, PlanetsList } from "../../shared";
import styles from "./MainPage.module.css";
import { usePlanetsService } from "../../../utils/usePlanetsService";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { Planet } from "../../shared/PlanetCard/PlanetCard.model";
import { Outlet } from "react-router-dom";

export const SEARCH_STR = "searchStr";
export const PLANETS_DATA = "planets";

export const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [errorForBoundary, setErrorForBoundary] = useState<boolean>(false);

  const [planetsFromLS, setPlanetsToLS] = useLocalStorage(PLANETS_DATA);
  const [searchStrFromLS, setSearcgStrToLS] = useLocalStorage(SEARCH_STR);
  const { loading, error, getPlanetsData, getSearchRes } = usePlanetsService();

  useEffect(() => {
    if (planetsFromLS && searchStrFromLS) {
      setPlanets(planetsFromLS);
      setInputValue(searchStrFromLS);
    } else {
      getPlanetsData().then((data) => {
        setPagesCount(Math.ceil(data.count / 10));
        setPlanets(data.results);
      });
    }
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onThrowErrorClick = () => {
    setErrorForBoundary(true);
  };

  const onSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    getSearchRes(inputValue).then((data) => {
      setPlanets(data);
      setPlanetsToLS(data);
    });
    setSearcgStrToLS(inputValue);
  };

  const onSelectedPageClick = (page: number) => {
    setSelectedPage(page);
    getPlanetsData(page).then((data) => {
      setPlanets(data.results);
    });
  };

  return (
    <>
      <Outlet />
      <div className={styles.wrapper}>
        <section className={styles.search}>
          <Input
            value={inputValue}
            onChange={onChange}
            placeholder="search..."
          />
          <Button type="primary" onClick={onSearchClick} text="Search" />
          <Button type="error" onClick={onThrowErrorClick} text="Throw Error" />
        </section>
        <ErrorBoundary>
          <section className={styles.content}>
            {loading && <div>Loading...</div>}
            {!error && !loading && (
              <PlanetsList
                planets={planets}
                pagesCount={pagesCount}
                selectedPage={selectedPage}
                onSelectedPageClick={onSelectedPageClick}
                error={errorForBoundary}
              />
            )}
          </section>
        </ErrorBoundary>
      </div>
    </>
  );
};
