import { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  type: "error" | "primary";
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export const Button: FC<ButtonProps> = ({ type, onClick, text }) => {
  return (
    <button
      className={type === "primary" ? styles.primary : styles.error}
      onClick={onClick}>
      {text}
    </button>
  );
};
