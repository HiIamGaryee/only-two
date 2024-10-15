import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import homeBg from "../assets/home-bg3.png";

const StatisticsSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        px: 4,
        py: 8,
        backdropFilter: "blur(12px)",
        webkitBackdropFilter: "blur(12px)",
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            color="warning.main"
          >
            25
          </Typography>
          <Typography variant="h5" color="light.main">
            Partnerships
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            color="warning.main"
          >
            1 Million
          </Typography>
          <Typography variant="h5" color="light.main">
            Members Joined
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            color="warning.main"
          >
            15
          </Typography>
          <Typography variant="h5" color="light.main">
            Event Organized
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            color="warning.main"
          >
            99
          </Typography>
          <Typography variant="h5" color="light.main">
            Awards Won
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsSection;
