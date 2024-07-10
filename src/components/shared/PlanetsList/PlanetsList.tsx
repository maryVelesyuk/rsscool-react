import { FC, useState } from "react";
import styles from "./PlanetsList.module.css";
import { Planet } from "../PlanetCard/PlanetCard.model";
import { PlanetCard } from "../PlanetCard";
import { Pagination } from "../Pagination";

interface PlanetsListProps {
  planets: Planet[];
}

export const PlanetsList: FC<PlanetsListProps> = ({ planets }) => {
  const [selectedPlanet, setSelrctedPlanet] = useState<string | null>(null);

  const onCardClick = (name: string) => {
    setSelrctedPlanet(name);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {planets?.map((planet) => (
          <PlanetCard
            key={planet.name}
            planetInfo={planet}
            active={planet.name === selectedPlanet}
            onCardClick={onCardClick}
          />
        ))}
      </div>
      <Pagination pagesCount={5} />
    </div>
  );
};
