"use client";
import { ChangeEvent, useState, MouseEvent } from "react";
import { Button, Input, PlanetsList, Switcher } from "../../shared";
import styles from "./MainPage.module.css";
import { Portal } from "../../shared/Portal";
import { useThemeContext } from "../../../utils/useThemeContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const MainPage = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [searchParam, setSearchParam] = useState<string>("");
  const { theme } = useThemeContext();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onSearchClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSearchParam(inputValue);
    const params = new URLSearchParams(searchParams);
    if (inputValue) {
      params.set("search", inputValue);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
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
          <PlanetsList searchParam={searchParam} />
        </section>
      </div>
      <Portal />
    </>
  );
};
