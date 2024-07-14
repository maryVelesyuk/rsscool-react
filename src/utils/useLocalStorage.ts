import { useState } from "react";

export const useLocalStorage = (
  key: string,
  defaultValue: string | null = null
) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
    setLocalStorageValue(value);
  };
  return [localStorageValue, setLocalStorageStateValue];
};
