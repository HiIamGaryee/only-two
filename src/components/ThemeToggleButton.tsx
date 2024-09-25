import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  Brightness7 as SunIcon,
  Brightness2 as MoonIcon,
} from "@mui/icons-material";
import useMode from "../hooks/useMode";

const ThemeToggleButton: React.FC = () => {
  const { mode, toggleMode } = useMode();
  console.log(mode);
  return (
    <IconButton onClick={toggleMode} color="inherit">
      {mode === "light" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
