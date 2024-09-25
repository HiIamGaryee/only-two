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

const yesevaFont = "Yeseva One, sans-serif";
const montserratFont = "Montserrat, sans-serif";
// Function to create a theme based on the mode

const getTheme = (mode: any) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#76992a", // Matcha green
        light: "#9cbf50", // Light Green
        dark: "#383f00", // Dark green
        contrastText: "FFFFFF",
      },
      secondary: {
        main: "#ebebeb", // Light grey
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
    typography: {
      fontFamily: montserratFont,
      h1: { fontFamily: yesevaFont },
      h2: { fontFamily: yesevaFont },
      h3: { fontFamily: yesevaFont },
      h4: { fontFamily: yesevaFont },
      h5: { fontFamily: yesevaFont },
      h6: { fontFamily: yesevaFont },
      subtitle1: { fontFamily: yesevaFont },
      button: { fontFamily: montserratFont },
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
          root: { fontWeight: "medium" },
          contained: {
            background: "#76992a",
            color: "#F5F3EF",
            borderRadius: "28px",
            "&:hover": {
              background: "#9cbf50",
            },
            "&.Mui-disabled": {
              color: "#666",
              background: "#333333",
            },
          },
          outlined: {
            borderColor: "#000",
            color: "#000",
            "&:focus": {
              borderColor: "#76992a",
              color: "#76992a",
              boxShadow: `0 0 0 1px #76992a`,
            },
            "&:hover": {
              borderColor: "#c17d39",
              color: "#76992a",
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
