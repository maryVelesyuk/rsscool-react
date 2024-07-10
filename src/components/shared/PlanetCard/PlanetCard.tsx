import { FC } from "react";
import styles from "./PlanetCard.module.css";
import { Planet } from "./PlanetCard.model";

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

  return (
    <div
      className={active ? styles.cardActive : styles.card}
      onClick={() => onCardClick(name)}>
      <h3 className={styles.title}>Planet: {name}</h3>
      <p className={styles.info}>Rotation period: {rotation_period}</p>
      <p className={styles.info}>Diameter: {diameter}</p>
      <p className={styles.info}>Climate: {climate}</p>
      <p className={styles.info}>Gravity: {gravity}</p>
    </div>
  );
};
