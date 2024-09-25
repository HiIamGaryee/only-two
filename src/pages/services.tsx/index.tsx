import React, { useState } from "react";
import { Box, Grid, Card, Typography, IconButton } from "@mui/material";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded"; // For Referral Program
import MovieRoundedIcon from "@mui/icons-material/MovieRounded"; // For Watch Movies
import TheatersRoundedIcon from "@mui/icons-material/TheatersRounded"; // For Buy Cinema Tickets
import StarRoundedIcon from "@mui/icons-material/StarRounded"; // For Exclusive Content
import RateReviewRoundedIcon from "@mui/icons-material/RateReviewRounded"; // For Movie Reviews
import RecommendRoundedIcon from "@mui/icons-material/RecommendRounded"; // For Personalized Recommendations
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded"; // For Watchlists
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded"; // For User Profile
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"; // For Focused Card
import Layout from "../../Layout";

const services = [
  {
    title: "Referral Program",
    description:
      "Invite friends and earn rewards for every referral who signs up.",
    views: "10k",
    actionText: "Learn more",
    bgColor: "#FFCDD2", // Light red
    icon: <PeopleAltRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "Watch Movies",
    description:
      "Stream the latest movies directly from our app with no interruptions.",
    views: "25k",
    actionText: "Start watching",
    bgColor: "#BBDEFB", // Light blue
    icon: <MovieRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "Buy Cinema Tickets",
    description: "Purchase cinema tickets conveniently through our platform.",
    views: "5k",
    actionText: "Buy now",
    bgColor: "#C8E6C9", // Light green
    icon: <TheatersRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "Exclusive Content",
    description: "Access exclusive content and behind-the-scenes footage.",
    views: "12k",
    actionText: "Explore content",
    bgColor: "#FFF9C4", // Light yellow
    icon: <StarRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "Movie Reviews",
    description: "Read and write reviews for movies you've watched.",
    views: "18k",
    actionText: "See reviews",
    bgColor: "#D1C4E9", // Light purple
    icon: <RateReviewRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "Personalized Recommendations",
    description: "Get movie recommendations based on your viewing history.",
    views: "8k",
    actionText: "Get recommendations",
    bgColor: "#FFECB3", // Light orange
    icon: <RecommendRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "Watchlists",
    description: "Create and manage watchlists for your favorite movies.",
    views: "15k",
    actionText: "Manage watchlist",
    bgColor: "#CFD8DC", // Light grey
    icon: <PlaylistAddRoundedIcon fontSize="large" />, // Icon
  },
  {
    title: "User Profile",
    description: "Manage your account, preferences, and settings.",
    views: "7k",
    actionText: "Manage profile",
    bgColor: "#E0F7FA", // Light cyan
    icon: <AccountCircleRoundedIcon fontSize="large" />, // Icon
  },
];

const ServicesPage = () => {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "light.main",
          color: "light.main",
          minHeight: "100vh",
          padding: "50px 20px",
        }}
      >
        <Typography variant="h3" gutterBottom align="center" fontWeight="bold">
          Our Services
        </Typography>
        <Typography variant="h6" gutterBottom align="center" sx={{ mb: 5 }}>
          Explore the various services we offer to enhance your movie
          experience.
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card
                sx={{
                  backgroundColor: service.bgColor,
                  borderRadius: "10px",
                  padding: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                  transform: focusedIndex === index ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s",
                }}
                onMouseEnter={() => setFocusedIndex(index)}
                onMouseLeave={() => setFocusedIndex(null)}
              >
                <Box>
                  {service.icon}
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "dark.main" }}
                  >
                    {index + 1}. {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mb: 2, color: "dark.main" }}
                  >
                    {service.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight="bold"
                    sx={{ color: "dark.main" }}
                  >
                    {service.views} views
                  </Typography>
                  <IconButton
                    aria-label={service.actionText}
                    sx={{
                      color: "black",
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default ServicesPage;
