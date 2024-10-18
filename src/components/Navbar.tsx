import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import LoginIcon from "@mui/icons-material/Login"; // Assuming you have a login icon

import CottageRoundedIcon from "@mui/icons-material/CottageRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useAuth } from "../AuthProvider";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./language";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navBarLinks = [
    {
      name: "home",
      icon: <CottageRoundedIcon />,
      link: "/",
    },
    {
      name: "profile",
      icon: <AccountCircleRoundedIcon />,
      link: "/member/profile",
    },
    user
      ? {
          name: "logout",
          icon: <LogoutRoundedIcon />,
          link: "#",
          onClick: handleLogout,
        }
      : {
          name: "login",
          icon: <LoginIcon />,
          link: "/login",
        },
  ];

  return (
    <AppBar
      position="static"
      // color="primary"
      sx={{ bgcolor: "primary.main" }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxHeight: 50, marginRight: 16, cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          />
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navBarLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.link}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#383f00" : "#ebebeb",
                display: "flex",
                alignItems: "center",
                marginRight: 4,
              })}
              onClick={item.onClick ? item.onClick : undefined}
            >
              {item.icon}
              <Typography
                sx={{
                  ml: 1,
                  display: { xs: "none", sm: "block" },
                  // color: isActive ? "#383f00" : "#ebebeb",
                }}
              >
                {t(item.name)}
              </Typography>
            </NavLink>
          ))}
          <LanguageSwitcher />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
