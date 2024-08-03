"use client";

import { createContext, ReactNode, useState } from "react";

interface ThemeContextProviderProps {
  children: ReactNode;
}

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

export default function ThemeProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
