import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import homeBg from "../assets/home-bg3.png";
import { useTranslation } from "react-i18next";

const StatisticsSection = () => {
  const { t } = useTranslation();

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
      <Grid container justifyContent="center" alignItems="center" spacing={4}>
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
            {t("partnerships")}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold" }}
            color="warning.main"
          >
            1 {t("million")}
          </Typography>
          <Typography variant="h5" color="light.main">
            {t("members_joined")}
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
            {t("event_organized")}
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
            {t("awards")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatisticsSection;
