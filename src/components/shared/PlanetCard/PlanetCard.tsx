import { ChangeEvent, FC } from "react";
import styles from "./PlanetCard.module.css";
import { Planet } from "./PlanetCard.model";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addPlanet, removePlanet } from "../../../redux/slices/selectedPlanets";

interface PlanetCardProps {
  planetInfo: Planet;
  active: boolean;
  onCardClick: (name: string) => void;
}

export const PlanetCard: FC<PlanetCardProps> = ({
  planetInfo,
  active,
  onCardClick,
}) => {
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
      <Link to={`/${name}`}>
        <div
          className={active ? styles.cardActive : styles.card}
          onChange={() => onCardClick(name)}>
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
          defaultChecked={planetsName.includes(name)}
          onChange={handleToggle}
        />
        <label htmlFor={name}>Select</label>
      </div>
    </div>
  );
};
