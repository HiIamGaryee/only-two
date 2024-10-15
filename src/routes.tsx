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
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/services.tsx";
import WizardzPage from "./pages/landings/wizardz";
import PackagePage from "./pages/packagePage";
import UpcomingPage from "./pages/upcomingPage";
import TnCPage from "./pages/TnCPage";
import BlogPage from "./pages/BlogPage";
import RewardsPage from "./pages/RewardsPage";
import DirectoryPage from "./pages/DirectoryPage";
import ReferralPage from "./pages/ReferralPage";
import FaqPage from "./pages/FaqPage";
import CollaborationPage from "./pages/CollaborationPage";
import PostPage from "./pages/PostPage";


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
    element: <Layout />, 
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignUp /> },
      { path: "/movies", element: <Movie /> },
      { path: "/tv-series", element: <TvSeries /> },
      { path: "/bookmarks", element: <Bookmark /> },
      { path: "/about-us", element: <AboutUsPage /> },
      { path: "/faq", element: <FaqPage /> },
      { path: "/referral", element: <ReferralPage /> },
      { path: "/package", element: <PackagePage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/upcoming-movies", element: <UpcomingPage /> },
      { path: "/terms-and-conditions", element: <TnCPage /> },
      { path: "/collaboration", element: <CollaborationPage /> },
      { path: "/blog", element: <BlogPage /> },
      { path: "/post", element: <PostPage /> },
      { path: "/wizardz", element: <WizardzPage /> },
      { path: "/rewards", element: <RewardsPage /> },
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
