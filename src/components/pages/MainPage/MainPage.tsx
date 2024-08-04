"use client";
import { ChangeEvent, useState, MouseEvent } from "react";
import { Button, Input, PlanetsList, Switcher } from "../../shared";
import styles from "./MainPage.module.css";
import { Portal } from "../../shared/Portal";
import { useThemeContext } from "../../../utils/useThemeContext";

export const SEARCH_STR = "searchStr";
export const PLANETS_DATA = "planets";

export const MainPage = () => {
  const [inputValue, setInputValue] = useState("");
  const { theme } = useThemeContext();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <Outlet /> */}
      <div
        className={`${styles.wrapper} ${theme === "light" ? styles.light : styles.dark}`}>
        <section className={styles.search}>
          <Input
            value={inputValue}
            onChange={onChange}
            placeholder="search..."
          />
          <Button type="primary" onClick={onSearchClick} text="Search" />
          <Switcher />
        </section>

        <section className={styles.content}>
          <PlanetsList />
        </section>
      </div>
      <Portal />
    </>
  );
};
