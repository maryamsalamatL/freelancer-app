import { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStrorageState";

const darkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const toggleDarkMode = () => setIsDarkMode((is) => !is);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}

export const useDarkMode = () => {
  const context = useContext(darkModeContext);

  if (context === undefined) {
    throw new Error("darkModeContext was used outside of DarkModeProvider!");
  }

  return context;
};
