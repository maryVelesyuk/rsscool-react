import { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";
import { useThemeContext } from "../../../utils/useThemeContext";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  const { theme } = useThemeContext();

  return (
    <input
      className={`${styles.input} ${theme === "dark" && styles.dark}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
