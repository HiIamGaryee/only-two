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
import { useTranslation } from "react-i18next"; // Import the translation hook
import bgiMG from "../assets/home-bg4.png";

const ReferralPage = () => {
  const { t } = useTranslation(); // Initialize translation hook
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
          {t("joinGreenMovement")}
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
          {t("supportSustainableProducts")}
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
          {t("referNow")}
        </Button>
      </Box>

      {/* Body Section */}
      <Box sx={{ p: 4, bgcolor: "#f1f8e9" }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#1b5e20", mb: 2 }}
          >
            {t("howItWorks")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "1.2rem", color: "#4e342e" }}
          >
            {t("inviteFriends")}
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
                  {t("yourReferrals")}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  {t("helpGrowCommunity")}
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
                  {t("copyReferralLink")}
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
                  {t("inviteFriendsViaEmail")}
                </Typography>
                <TextField
                  label={t("enterEmailAddresses")}
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
                  {t("sendInvites")}
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
            {t("spreadTheWord")}
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
          {t("sharingImpact")}
        </Typography>
      </Box>
    </Layout>
  );
};

export default ReferralPage;
