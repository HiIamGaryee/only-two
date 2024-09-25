import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { router } from "./routes";
import { MovieProvider } from "./context/movie-context";
import "./App.css";
import { AuthProvider } from "./AuthProvider";
import useMode from "./hooks/useMode";

const queryClient = new QueryClient();

function App() {
  const { theme } = useMode();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MovieProvider>
            <RouterProvider router={router} />
          </MovieProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
