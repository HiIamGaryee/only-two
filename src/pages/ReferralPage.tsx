import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Layout from "../Layout";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import bgiMG from "../assets/home-bg4.png";

const ReferralPage = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${bgiMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "primary.main",
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Join the Green Movement 🌱
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "light.main",

            textAlign: "center",
            mb: 4,
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Support sustainable products and ideas by referring your friends!
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            bgcolor: "success.main",
            color: "light.main",
            "&:hover": { bgcolor: "#388e3c" },
            px: 4,
            py: 1.5,
          }}
        >
          Refer Now
        </Button>
      </Box>

      {/* Body Section */}
      <Box sx={{ p: 4, bgcolor: "#f1f8e9" }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1b5e20", mb: 2 }}
          >
            How It Works
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", color: "#4e342e" }}
          >
            Invite your friends to join the platform. For every referral, you
            contribute directly to sustainable projects and receive green
            rewards!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                boxShadow: 4,
                borderRadius: 3,
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": { boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Your Referrals
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  Help us grow the green community! Share your referral link
                  with friends, and for each sign-up, earn rewards like
                  eco-friendly products or green credits.
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <TextField
                  variant="outlined"
                  fullWidth
                  value="https://example.com/referral-link"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton>
                          <ContentCopyIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "success.main",
                    color: "light.main",
                    "&:hover": { bgcolor: "#388e3c" },
                    width: "100%",
                    py: 1.5,
                  }}
                >
                  Copy Referral Link
                </Button>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                p: 4,
                boxShadow: 4,
                borderRadius: 3,
                transition: "box-shadow 0.3s ease-in-out",
                "&:hover": { boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color="primary"
                  gutterBottom
                >
                  Invite Friends via Email
                </Typography>
                <TextField
                  label="Enter email addresses"
                  variant="outlined"
                  fullWidth
                  value={email}
                  onChange={handleEmailChange}
                  sx={{
                    mb: 2,
                    bgcolor: "light.main",
                    borderRadius: 2,
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "success.main",
                    color: "light.main",
                    "&:hover": { bgcolor: "#388e3c" },
                    width: "100%",
                    py: 1.5,
                  }}
                >
                  Send Invites
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            sx={{ mb: 2 }}
          >
            Spread the Word on Social Media 🌍
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0077b5",
                minWidth: 48,
                minHeight: 48,
                "&:hover": { bgcolor: "#005582" },
              }}
            >
              <LinkedInIcon />
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#1DA1F2",
                minWidth: 48,
                minHeight: 48,
                "&:hover": { bgcolor: "#0d8ddb" },
              }}
            >
              <TwitterIcon />
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          bgcolor: "#388e3c",
          color: "light.main",
          p: 4,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          By sharing, you’re helping the environment and making a direct impact
          on sustainability projects worldwide.
        </Typography>
      </Box>
    </Layout>
  );
};

export default ReferralPage;
