import React from "react";
import { Box, Typography, Grid, Avatar, Stack, Card } from "@mui/material";
import ProfilePicture from "../../assets/profile-avatar.jpg";
import Layout from "../../Layout";
import HailRoundedIcon from "@mui/icons-material/HailRounded";
import MilitaryTechRoundedIcon from "@mui/icons-material/MilitaryTechRounded";
import { useTranslation } from "react-i18next";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import ArrowForwardIosTwoToneIcon from "@mui/icons-material/ArrowForwardIosTwoTone";
import RedeemRoundedIcon from "@mui/icons-material/RedeemRounded";
import LocalActivityRoundedIcon from "@mui/icons-material/LocalActivityRounded";
import { useNavigate } from "react-router-dom";
const card = [
  {
    code: 1,
    title: "Member Type",
    content: "Member",
    icon: <MilitaryTechRoundedIcon color="primary" />,
  },
  {
    code: 2,
    title: "Referral",
    content: "2",
    icon: <HailRoundedIcon color="error" />,
  },
  {
    code: 3,
    title: "Redeem Point",
    content: "2,000",
    icon: <RedeemRoundedIcon color="warning" />,
  },
  {
    code: 4,
    title: "Joined Event",
    content: "4",
    icon: <LocalActivityRoundedIcon color="info" />,
  },
];

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={9}>
            <Box
              sx={{
                flexGrow: 1,
                bgcolor: "#f4f4f4", // Sets a light background color for the whole page
                display: "flex",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 800, // Limits card size for better aesthetics
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3, // Adds a subtle shadow for depth
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Avatar
                    src={ProfilePicture}
                    sx={{ width: 56, height: 56, mb: 2 }}
                  />
                  <Typography variant="h4">Jack Adams</Typography>
                </Box>
                <Box sx={{ borderRadius: 2 }}>
                  <Box>
                    <Typography variant="h6">Product Designer</Typography>
                    <Typography variant="body2">
                      Los Angeles, California, USA
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6">Personal Information</Typography>
                    <Typography variant="body2">First Name: Jack</Typography>
                    <Typography variant="body2">Last Name: Adams</Typography>
                    <Typography variant="body2">
                      Email: jackadams@gmail.com
                    </Typography>
                    <Typography variant="body2">
                      Phone: (213) 555-1234
                    </Typography>
                    <Typography variant="body2">
                      Bio: Product Designer
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            {/* <Box
              sx={{
                flexGrow: 1,
                bgcolor: "#f4f4f4", // Sets a light background color for the whole page
                display: "flex",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3, // Adds a subtle shadow for depth
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Rewards
                </Typography>
              </Card>
            </Box> */}
          </Grid>
          {card.map((item) => (
            <Grid item xs={12} sm={3} key={item.code}>
              <Card
                sx={{
                  p: 4,
                  borderRadius: 2,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h5"
                    sx={{ alignItems: "center", display: "flex" }}
                  >
                    {item.icon}
                  </Typography>
                  {item.code === 3 && (
                    <Typography
                      variant="body2"
                      alignItems="center"
                      display="flex"
                      onClick={() => navigate(`/rewards`)}
                      sx={{ cursor: "pointer" }}
                    >
                      Redeem Rewards{" "}
                      <ArrowForwardIosTwoToneIcon sx={{ width: 12 }} />
                    </Typography>
                  )}
                </Box>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{ mt: 2, mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="h6" fontWeight="bold">
                  {item.content}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default Profile;
