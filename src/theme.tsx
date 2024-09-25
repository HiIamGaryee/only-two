import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    light: PaletteColor;
    dark: PaletteColor;
  }

  interface PaletteOptions {
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }
}

// Function to create a theme based on the mode
const getTheme = (mode: any) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#e2994f" : "#FFFFFF", // Brown for light mode, White for dark mode
        light: "#A67C52",
        dark: "#6D4C41",
        contrastText: mode === "light" ? "#FFFFFF" : "#333333", // White text on primary color in light mode, dark text in dark mode
      },
      secondary: {
        main: mode === "light" ? "#f7f3f0" : "#676767", // Light grey for light mode, grey for dark mode
        light: "#FFD700",
        dark: "#8c8a88",
        contrastText: "#FFFFFF", // White text on secondary color
      },
      light: {
        main: "#F5F3EF", // Main light background color (white background color)
        light: "#FFFFFF",
        dark: "#EDE7E0",
      },
      dark: {
        main: "#18100e", // Main dark background color
        light: "#514c4b",
        dark: "light.main",
      },
      error: {
        main: "#f44336", // Red for errors
        light: "#e57373",
        dark: "#d32f2f",
      },
      warning: {
        main: "#ff9800", // Orange for warnings
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: mode === "light" ? "#2196f3" : "#BBDEFB", // Light blue for information in light mode, softer in dark mode
        light: "#64b5f6",
        dark: "#1976d2",
      },
      success: {
        main: "#4caf50", // Green for successes
        light: "#81c784",
        dark: "#388e3c",
      },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          elevation: 2,
        },
        styleOverrides: {
          root: {
            // padding: "20px",
            backgroundColor: "#ffcdaa", // Light grey background
            "&.table-paper": {
              boxShadow: "none",
              borderRadius: 0,
            },
          },
          rounded: {
            borderRadius: "20px",
          },
          outlined: {
            borderColor: "#bdbdbd", // Light grey border
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            border: "1px solid #444",
            borderRadius: "4px",
            background: "linear-gradient(45deg, #434343 0%, #000 100%)",
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            color: "#fff",
            border: "none",
            "&.Mui-selected": {
              backgroundColor: "#555",
              color: "#fff",
            },
            "&:hover": {
              backgroundColor: "#444",
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            background: "#e2994f",
            color: "#F5F3EF",
            borderRadius: "28px",
            "&:hover": {
              background: "#c17d39",
            },
            "&.Mui-disabled": {
              color: "#666",
              background: "#333333",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: "#f7f3f0",
            padding: "24px",
            borderRadius: "16px",
            height: "100%",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#18100e",
          },
        },
      },
    },
  });

export default getTheme;
