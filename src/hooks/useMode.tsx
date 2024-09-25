import { useState, useMemo, useEffect } from "react";
import getTheme from "../theme";
import { Theme } from "@mui/material/styles";

const useMode = () => {
  const [mode, setMode] = useState<"light" | "dark">(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode ? (savedMode as "light" | "dark") : "light";
  });

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      localStorage.setItem("themeMode", newMode);
      return newMode;
    });
  };

  const theme: Theme = useMemo(() => getTheme(mode), [mode]);

  // Add useEffect to apply the theme mode immediately when changed
  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.setAttribute("data-theme", mode);
  }, [mode]);

  return { theme, mode, toggleMode };
};

export default useMode;
