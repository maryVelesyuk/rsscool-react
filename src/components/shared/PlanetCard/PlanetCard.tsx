import { ChangeEvent, FC } from "react";
import styles from "./PlanetCard.module.css";
import { Planet } from "./PlanetCard.model";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { addPlanet, removePlanet } from "../../../lib/features/selectedPlanets";
import { useThemeContext } from "../../../utils/useThemeContext";

interface PlanetCardProps {
  planetInfo: Planet;
}

export const PlanetCard: FC<PlanetCardProps> = ({ planetInfo }) => {
  const { theme } = useThemeContext();
  const { name, rotation_period, diameter, climate, gravity } = planetInfo;
  const { planetsName } = useAppSelector((state) => state.selectedPlanets);
  const dispatch = useAppDispatch();

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      dispatch(addPlanet(planetInfo));
    } else {
      dispatch(removePlanet(name));
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link href={`planets/${name}`}>
        <div
          className={`${styles.card} ${theme === "dark" && styles.dark}`}
          data-testid="planetCard">
          <h3 className={styles.title}>Planet: {name}</h3>
          <p className={styles.info}>Rotation period: {rotation_period}</p>
          <p className={styles.info}>Diameter: {diameter}</p>
          <p className={styles.info}>Climate: {climate}</p>
          <p className={styles.info}>Gravity: {gravity}</p>
        </div>
      </Link>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={name}
          checked={planetsName.includes(name)}
          onChange={handleToggle}
        />
        <label htmlFor={name}>Select</label>
      </div>
    </div>
  );
};
