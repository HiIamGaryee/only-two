import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Toolbar,
  AppBar,
  TextField,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ThemeToggleButton from "../../../components/ThemeToggleButton";
import { Link } from "react-router-dom";

// Dummy data for services, similar to the referral rewards
const serviceList = [
  {
    img: "img1", // Replace with actual import if you have images as React components or use <img src="path"/>
    title: "Search Engine Optimization",
    description:
      "Optimize your website to rank higher in search engine results and increase traffic.",
  },
  {
    img: "img2",
    title: "Pay Per Click Advertising",
    description:
      "Gain fast visibility and traffic through targeted paid ads on platforms like Google and Bing.",
  },
  {
    img: "img3",
    title: "Social Media Marketing",
    description:
      "Enhance your presence on social media platforms to engage with a wider audience.",
  },
  {
    img: "img4",
    title: "E-mail Marketing",
    description:
      "Reach your customers directly through personalized email campaigns.",
  },
];

const navBarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Movies",
    link: "/movies",
  },
  {
    name: "TV Series",
    link: "/tv-series",
  },
  {
    name: "Bookmarks",
    link: "/bookmarks",
  },
  {
    name: "Profile",
    link: "/member/profile",
  },
];

const footerLinks = [
  {
    title: "SITEMAP",
    links: [
      { name: "About us", link: "/about-us" },
      { name: "Services", link: "/services" },
      { name: "Blog", link: "/blog" },
      { name: "Upcoming Movies", link: "/upcoming-movies" },
    ],
  },
  {
    title: "HELP",
    links: [
      { name: "Getting started", link: "/getting-started" },
      { name: "Package", link: "/package" },
      { name: "FAQ", link: "/faq" },
      { name: "Referral", link: "/referral" },
    ],
  },
];

const WizardzPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "light.main",
        display: "flex",
        flexDirection: "column",
        color: "white",
        // overflowY: "hidden",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <AppBar
        position="static"
        color="primary"
        sx={{ backgroundColor: "#161d2f" }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ maxHeight: 50, marginRight: 16 }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            {navBarLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "#4caf50" : "inherit",
                  display: "flex",
                  alignItems: "center",
                  marginRight: 4,
                })}
              >
                <Typography
                  sx={{ ml: 1, display: { xs: "none", sm: "block" } }}
                >
                  {item.name}
                </Typography>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          backgroundColor: "light.main",
          color: "white",
          p: 4,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" fontWeight="bold">
            Navigating the Digital Landscape for Success wuhu
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {serviceList.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ backgroundColor: "#2a2a2a", color: "white" }}>
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h5" fontWeight="bold">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Button variant="contained">Learn More</Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        component="footer"
        sx={{
          backgroundColor: "#161d2f",
          padding: 4,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          color: "white",
          flexWrap: "wrap",
          maxHeight: "250px",
        }}
      >
        <img
          src="/logo.png"
          alt="Logo"
          style={{ maxHeight: 50, marginRight: 16 }}
        />
        <ThemeToggleButton />
        {footerLinks.map((section) => (
          <Box key={section.title} sx={{ flex: 1, minWidth: 200 }}>
            <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
              {section.title}
            </Typography>
            {section.links.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "light.main",
                    mb: 1,
                    "&:hover": {
                      color: "#4caf50",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Link>
            ))}
          </Box>
        ))}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
            SUBSCRIBE
          </Typography>
          <Box sx={{ display: "flex", mb: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Enter email address"
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                flex: 1,
                marginRight: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ff5722", color: "white" }}
            >
              SEND
            </Button>
          </Box>
        </Box>
        <Box sx={{ width: "100%", mt: 4, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "white" }}>
            © 2019 All rights reserved by Brewed in chaos Sdn Bhd.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default WizardzPage;
