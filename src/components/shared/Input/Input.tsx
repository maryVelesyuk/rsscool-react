import { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
