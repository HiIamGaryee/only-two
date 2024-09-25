import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Error from "./pages/error";
import Movie from "./pages/movie";
import TvSeries from "./pages/tv-series";
import Bookmark from "./pages/bookmark";
import SignUp from "./pages/signup";
import Profile from "./pages/profile";
import { AuthProvider } from "./AuthProvider";
import ProtectedRoute from "./ProtectedRoute";
import AboutUs from "./pages/about-us.tsx";
import Faq from "./pages/faq.tsx";
import ReferralPage from "./pages/referral.tsx";
import PackagePage from "./pages/package.tsx";
import ServicesPage from "./pages/services.tsx";
import UpcomingPage from "./pages/upcomingPage.tsx";
import WizardzPage from "./pages/landings/wizardz";

// Layout component that specifies the default error element
const Layout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use the Layout as the top-level route element
    errorElement: <Error />, // Set a default error element here
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/movies", element: <Movie /> },
      { path: "/tv-series", element: <TvSeries /> },
      { path: "/bookmarks", element: <Bookmark /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/faq", element: <Faq /> },
      { path: "/referral", element: <ReferralPage /> },
      { path: "/package", element: <PackagePage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/upcoming-movies", element: <UpcomingPage /> },
      { path: "/wizardz", element: <WizardzPage /> },
      {
        path: "/member/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function AppRouter() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default AppRouter;
