import React from "react";
import { Box, Grid, Card, Typography, Button } from "@mui/material";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the translation hook

const blogPosts = [
  {
    id: 1,
    image: require("../eco images/habits.jpg"),
    titleKey: "featuredTitle",
    descriptionKey: "featuredDescription",
  },
  {
    id: 2,
    image: require("../eco images/confuse.jpg"),
    titleKey: "plasticTitle",
  },
  {
    id: 3,
    image: require("../eco images/tap.jpg"),
    titleKey: "waterTitle",
  },
  {
    id: 4,
    image: require("../eco images/fc.jpg"),
    titleKey: "renewableTitle",
  },
  {
    id: 5,
    image: require("../eco images/hqdefault.jpg"),
    titleKey: "compostingTitle",
  },
];

const BlogPage = () => {
  const { t } = useTranslation(); // Initialize translation
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/post`);
  };

  return (
    <Layout>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 4 }}>
        {t("title")}
      </Typography>

      <Box sx={{ maxWidth: "100%", overflowY: "auto", px: 4, mb: 6 }}>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={post.id === 1 ? 8 : 4} key={post.id}>
              <Card
                sx={{
                  backgroundImage: `url(${post.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: post.id === 1 ? "400px" : "200px",
                  position: "relative",
                  color: "light.main",
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
                    variant={post.id === 1 ? "h4" : "h6"}
                    fontWeight="bold"
                    gutterBottom
                    sx={{ color: "light.main" }}
                  >
                    {t(post.titleKey)}
                  </Typography>
                  {post.descriptionKey && (
                    <Typography
                      variant="body1"
                      sx={{ mb: 2, color: "light.main" }}
                    >
                      {t(post.descriptionKey)}
                    </Typography>
                  )}
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#4caf50", color: "light.main" }}
                    onClick={handleReadMore}
                  >
                    {t("readMore")}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default BlogPage;
