import { Planet } from "../PlanetCard/PlanetCard.model";
import styles from "./PlanetInfo.module.css";
import { useLoaderData, useNavigate } from "react-router-dom";

export const PlanetInfo = () => {
  const {
    results: [
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
    ],
  } = useLoaderData() as { results: Planet[] };
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <button className={styles.close} onClick={() => navigate("/")}>
        close
      </button>
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
