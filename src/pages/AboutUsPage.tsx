import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Facebook, Twitter, LinkedIn, Email, Print } from "@mui/icons-material";
import Layout from "../Layout";
import imagePlaceholder from "../eco images/ECO GREEN leaf 1.webp";
import imagePlaceholder1 from "../eco images/Green-Nature-Eco-Friendly-Wallpapers-Large-37.jpg";
import { useTranslation } from "react-i18next"; // Import the translation hook

const AboutUsPage = () => {
  const { t } = useTranslation(); // Initialize translation
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 400) {
        setIsContactVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              position: "sticky",
              top: 0,
              p: 3,
              bgcolor: "#f5f5f5",
              height: "100vh",
              borderRight: "1px solid #ccc",
            }}
          >
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              {t("aboutUs")} {/* Translate "About Us" */}
            </Typography>
            <List>
              <ListItem button>
                <ListItemText primary={t("leadership")} /> {/* Leadership */}
              </ListItem>
              <ListItem button>
                <ListItemText primary={t("awardsRecognition")} /> {/* Awards */}
              </ListItem>
              <ListItem button>
                <ListItemText primary={t("investors")} /> {/* Investors */}
              </ListItem>
              <ListItem button>
                <ListItemText primary={t("suppliers")} /> {/* Suppliers */}
              </ListItem>
              <ListItem button>
                <ListItemText primary={t("complianceOverview")} /> {/* Compliance */}
              </ListItem>
            </List>

            <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <LinkedIn />
              </Link>
              <Link href="#" color="inherit">
                <Email />
              </Link>
              <Link href="#" color="inherit">
                <Print />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={9}>
          <Box sx={{ p: 4 }}>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  {t("ourStoryTitle")} {/* "Our Story" */}
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {t("ourMission")} {/* "We Support Sustainable Living & Green Innovation" */}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {t("ourStoryDescription1")} {/* Story Description */}
                  <br />
                  <br />
                  {t("ourStoryDescription2")} {/* Another part of the story */}
                </Typography>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={imagePlaceholder}
                  alt="Nature Scene"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={4} alignItems="center" sx={{ mt: 6 }}>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={imagePlaceholder1}
                  alt="Eco-friendly products"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  {t("whyWeCareTitle")} {/* "Why We Care About Sustainability" */}
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {t("whyWeCareDescription1")} {/* First part of description */}
                  <br />
                  <br />
                  {t("whyWeCareDescription2")} {/* Second part of description */}
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                mt: 6,
                opacity: isContactVisible ? 1 : 0,
                transform: isContactVisible
                  ? "translateY(0)"
                  : "translateY(50px)",
                transition: "opacity 1s ease, transform 1s ease",
              }}
            >
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                {t("getInTouchTitle")} {/* "Get In Touch" */}
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                {t("getInTouchDescription")} {/* Reach out description */}
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  maxWidth: 600,
                }}
              >
                <TextField label={t("yourName")} variant="outlined" fullWidth /> {/* Name Field */}
                <TextField label={t("yourEmail")} variant="outlined" fullWidth /> {/* Email Field */}
                <TextField
                  label={t("yourMessage")} /* Message Field */
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button variant="contained" color="primary">
                  {t("submit")} {/* Submit Button */}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutUsPage;
