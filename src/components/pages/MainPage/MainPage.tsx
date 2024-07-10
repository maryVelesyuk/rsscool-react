import { ChangeEvent, useEffect, useState } from "react";
import { Button, Input, PlanetsList } from "../../shared";
import styles from "./MainPage.module.css";
import { usePlanetsService } from "../../../utils/usePlanetsService";
import { useLocalStorage } from "../../../utils/useLocalStorage";
import { Planet } from "../../shared/PlanetCard/PlanetCard.model";
import ErrorMessage from "../../shared/ErrorMessage/ErrorMessage";

export const SEARCH_STR = "searchStr";
export const PLANETS_DATA = "planets";

export const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [planets, setPlanets] = useState<Planet[]>([]);

  const [planetsFromLS, setPlanetsToStorage] = useLocalStorage(PLANETS_DATA);
  const [searchStrFromLS, setSearcgStrToLS] = useLocalStorage(SEARCH_STR);
  const { loading, error, getPlanetsData, getSearchRes } = usePlanetsService();

  useEffect(() => {
    if (planetsFromLS && searchStrFromLS) {
      setPlanets(planetsFromLS);
      setInputValue(searchStrFromLS);
    } else {
      getPlanetsData().then((data) => {
        setPlanets(data);
      });
    }
  }, [getPlanetsData, planetsFromLS, searchStrFromLS]); //FIIIX

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onThrowErrorClick = () => {};

  const onSearchClick = () => {
    getSearchRes(inputValue).then((data) => {
      setPlanets(data);
      setPlanetsToStorage(data);
    });
    setSearcgStrToLS(inputValue);
  };

  return (
    <div className={styles.wrapper}>
      <section className={styles.search}>
        <Input value={inputValue} onChange={onChange} placeholder="search..." />
        <Button type="primary" onClick={onSearchClick} text="Search" />
        <Button type="error" onClick={onThrowErrorClick} text="Throw Error" />
      </section>
      <section className={styles.content}>
        {error && <ErrorMessage />}
        {loading && <div>Loading...</div>}
        {!error && !loading && <PlanetsList planets={planets} />}
      </section>
    </div>
  );
};
