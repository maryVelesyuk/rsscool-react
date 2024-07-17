import { FC, useState } from "react";
import styles from "./PlanetsList.module.css";
import { PlanetCard } from "../PlanetCard";
import { Pagination } from "../Pagination";
import { useGetPlanetsQuery } from "../../../redux/api/planetsApi";
import { Spinner } from "../Spinner";
import { ErrorMessage } from "../ErrorMessage";
import { useAppSelector } from "../../../redux/hooks";

export const PlanetsList: FC = () => {
  const [selectedPlanet, setSelrctedPlanet] = useState<string | null>(null);
  const { selectedPage } = useAppSelector((state) => state.selectedPage);
  const {
    data: planetsData,
    isError,
    isLoading,
  } = useGetPlanetsQuery(selectedPage);

  const onCardClick = (name: string) => {
    setSelrctedPlanet(name);
  };

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage />;

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {planetsData && planetsData.results.length
          ? planetsData.results.map((planet) => (
              <PlanetCard
                key={planet.name}
                planetInfo={planet}
                active={planet.name === selectedPlanet}
                onCardClick={onCardClick}
              />
            ))
          : "Search result not found!"}
      </div>
      <Pagination pagesCount={planetsData && planetsData.count} />
    </div>
  );
};
