import { FC } from "react";
import styles from "./PlanetsList.module.css";
import { PlanetCard } from "../PlanetCard";
import { Pagination } from "../Pagination";
import { useGetPlanetsQuery } from "../../../lib/api/planetsApi";
import { Spinner } from "../Spinner";
import { ErrorMessage } from "../ErrorMessage";
import { useAppSelector } from "../../../lib/hooks";

export const PlanetsList: FC = () => {
  const { selectedPage } = useAppSelector((state) => state.selectedPage);
  const {
    data: planetsData,
    isError,
    isLoading,
  } = useGetPlanetsQuery(selectedPage);

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorMessage />;

  return (
    <>
      <div className={styles.wrapper} data-testid="planetsList">
        <div className={styles.content}>
          {planetsData && planetsData.results.length
            ? planetsData.results.map((planet) => (
                <PlanetCard key={planet.name} planetInfo={planet} />
              ))
            : "Search result not found!"}
        </div>
      </div>
      <Pagination planetsCount={planetsData && planetsData.count} />
    </>
  );
};
