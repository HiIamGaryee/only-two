import { Link, NavLink, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LocalMoviesRoundedIcon from "@mui/icons-material/LocalMoviesRounded";
import BookmarksRoundedIcon from "@mui/icons-material/BookmarksRounded";
import LiveTvRoundedIcon from "@mui/icons-material/LiveTvRounded";
import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
// import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const navLinks = [
  {
    name: "Home",
    icon: <CottageRoundedIcon />,
    link: "/",
  },
  {
    name: "Movies",
    icon: <LocalMoviesRoundedIcon />,
    link: "/movies",
  },
  {
    name: "TV Series",
    icon: <LiveTvRoundedIcon />,
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    icon: <BookmarksRoundedIcon />,
    link: "/bookmarks",
  },
  {
    name: "Profile",
    icon: <AccountCircleRoundedIcon />,
    link: "/member/profile",
  },
  {
    name: "Login",
    icon: <LogoutRoundedIcon />,
    link: "/login",
  },
];

const Sidebar = () => {
  // const { pathname } = useLocation();

  return (
    <Box
      sx={{
        backgroundColor: "#161d2f",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
        width: {
          sm: "100%",
          lg: 200,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "row",
            lg: "column",
          },
          gap: 5,
          alignItems: {
            xs: "center",
            lg: "start",
          },
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          my={2}
          fontWeight="bold"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          CinemaApp
        </Typography>

        <Box
          sx={{
            py: {
              xs: "0px",
              lg: "4px",
            },
            display: "flex",
            flexDirection: {
              xs: "row",
              lg: "column",
            },
            gap: 4,
          }}
        >
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                <NavLink
                  to={item.link}
                  key={item.name}
                  style={({ isActive }) => ({
                    display: "flex",
                    alignItems: "center",
                    color: isActive ? "#4caf50" : "#512da8",
                    textDecoration: "none",
                  })}
                >
                  {item.icon}
                </NavLink>

                <Typography sx={{ display: { xs: "none", md: "block" } }}>
                  {item.name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
