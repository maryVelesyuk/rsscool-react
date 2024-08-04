"use client";
import { useRouter } from "next/navigation";
import { useThemeContext } from "../../../utils/useThemeContext";
import { Button } from "../Button";
import { Planet } from "../PlanetCard/PlanetCard.model";
import styles from "./PlanetInfo.module.css";

export const PlanetInfo = ({ planetData }: { planetData: Planet[] }) => {
  const router = useRouter();
  const { theme } = useThemeContext();
  const [
    {
      name,
      diameter,
      gravity,
      orbital_period,
      population,
      rotation_period,
      surface_water,
      terrain,
    },
  ] = planetData;

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div
      className={`${styles.wrapper} ${theme === "dark" && styles.dark}`}
      data-testid="planetInfo">
      <div className={styles.close}>
        <Button type="primary" onClick={handleClick} text="close" />
      </div>
      <h3>Aditional information about planet {name}</h3>
      <p>diameter: {diameter}</p>
      <p>gravity: {gravity} </p>
      <p>orbital period: {orbital_period}</p>
      <p>population: {population}</p>
      <p>rotation period: {rotation_period}</p>
      <p>surface water: {surface_water}</p>
      <p>terrain: {terrain}</p>
    </div>
  );
};
