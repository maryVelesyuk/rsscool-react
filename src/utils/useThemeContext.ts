import { useContext } from "react";
import { ThemeContext } from "../app/theme-provider";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used with ThemeProvider");
  }

  return context;
};
