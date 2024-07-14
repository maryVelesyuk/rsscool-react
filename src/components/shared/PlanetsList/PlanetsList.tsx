import { FC, useState } from "react";
import styles from "./PlanetsList.module.css";
import { Planet } from "../PlanetCard/PlanetCard.model";
import { PlanetCard } from "../PlanetCard";
import { Pagination } from "../Pagination";

interface PlanetsListProps {
  planets: Planet[];
  pagesCount: number;
  selectedPage: number;
  onSelectedPageClick: (page: number) => void;
  error: boolean;
}

export const PlanetsList: FC<PlanetsListProps> = ({
  planets,
  pagesCount,
  onSelectedPageClick,
  selectedPage,
  error,
}) => {
  const [selectedPlanet, setSelrctedPlanet] = useState<string | null>(null);

  const onCardClick = (name: string) => {
    setSelrctedPlanet(name);
  };

  if (error) {
    throw new Error("Error");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {planets.length
          ? planets.map((planet) => (
              <PlanetCard
                key={planet.name}
                planetInfo={planet}
                active={planet.name === selectedPlanet}
                onCardClick={onCardClick}
              />
            ))
          : "Search result not found!"}
      </div>
      <Pagination
        pagesCount={pagesCount}
        onSelectedPageClick={onSelectedPageClick}
        selectedPage={selectedPage}
      />
    </div>
  );
};
