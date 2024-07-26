import { ChangeEvent } from "react";
import { useThemeContext } from "../../../utils/useThemeContext";
import styles from "./Switcher.module.css";

export const Switcher = () => {
  const { setTheme } = useThemeContext();

  const toggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <label className={styles.switch}>
      <input type="checkbox" onChange={toggleTheme} />
      <span className={styles.slider} />
    </label>
  );
};
