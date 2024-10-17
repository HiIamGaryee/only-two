import React from "react";
import { Box, Grid, Card, Typography, Button } from "@mui/material";
import Layout from "../Layout";
import Image1 from '../eco images/habits.jpg';  
import Image2 from '../eco images/confuse.jpg'; 
import Image3 from '../eco images/tap.jpg'; 
import Image4 from '../eco images/fc.jpg';  
import Image5 from '../eco images/hqdefault.jpg';  
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";  // Import the translation hook

const BlogPage = () => {
  const { t } = useTranslation();  // Initialize translation
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/post`);
  };

  return (
    <Layout>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 4 }}>
        {t('title')}  {/* Use translation for the title */}
      </Typography>

      <Box sx={{ maxWidth: "100%", overflowY: "auto", px: 4, mb: 6 }}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={8}>
            <Card
              sx={{
                backgroundImage: `url(${Image1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
                position: "relative",
                color: "#ffffff",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffff" }}
                >
                  {t('featuredTitle')}  {/* Use translation for the featured title */}
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#ffffff" }}>
                  {t('featuredDescription')}  {/* Use translation for the description */}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}
                  onClick={handleReadMore}
                >
                  {t('readMore')}  {/* Use translation for button */}
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: `url(${Image2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "200px",
                position: "relative",
                color: "#ffffff",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffff" }}
                >
                  {t('plasticTitle')}  {/* Use translation for the plastic title */}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}
                  onClick={handleReadMore}
                >
                  {t('readMore')}  {/* Use translation for the button */}
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: `url(${Image3})`,
                backgroundPosition: "center",
                minHeight: "200px",
                position: "relative",
                color: "#ffffff",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffff" }}
                >
                  {t('waterTitle')}  {/* Use translation for the water title */}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}
                  onClick={handleReadMore}
                >
                  {t('readMore')}  {/* Use translation for the button */}
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: `url(${Image4})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "200px",
                position: "relative",
                color: "#ffffff",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffff" }}
                >
                  {t('renewableTitle')}  {/* Use translation for the renewable energy title */}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}
                  onClick={handleReadMore}
                >
                  {t('readMore')}  {/* Use translation for the button */}
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: `url(${Image5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "200px",
                position: "relative",
                color: "#ffffff",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#ffffff" }}
                >
                  {t('compostingTitle')}  {/* Use translation for the composting title */}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}
                  onClick={handleReadMore}
                >
                  {t('readMore')}  {/* Use translation for the button */}
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default BlogPage;
