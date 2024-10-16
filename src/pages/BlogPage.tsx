import React from "react";
import { Box, Grid, Card, Typography, Button } from "@mui/material";
import Layout from "../Layout";
import Image1 from "../eco images/habits.jpg";
import Image2 from "../eco images/confuse.jpg";
import Image3 from "../eco images/tap.jpg";
import Image4 from "../eco images/fc.jpg";
import Image5 from "../eco images/hqdefault.jpg";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 2,
    title: "How to Reduce Plastic in Your Daily Life",
    image: Image2,
  },
  {
    id: 3,
    title: "10 Ways to Conserve Water at Home",
    image: Image3,
  },
  {
    id: 4,
    title: "Renewable Energy: The Future of Green Technology",
    image: Image4,
  },
  {
    id: 5,
    title: "Composting 101: Turn Your Waste Into Gold",
    image: Image5,
  },
];

const BlogPage = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/post`);
  };

  return (
    <Layout>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 4 }}>
        Eco-Friendly Tips & News
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
                  bgcolor: "rgba(0, 0, 0, 0.5)",
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
                  Featured: The Top Eco-Friendly Habits to Start Today
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#ffffff" }}>
                  Learn how these simple eco-friendly habits can help you make a
                  positive impact on the planet.
                </Typography>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "success.main", color: "#ffffff" }}
                  onClick={handleReadMore}
                >
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>
          {/* Blog 2-5 */}
          {blogPosts.map((post) => (
            <Grid item xs={12} md={4} key={post.id}>
              <Card
                sx={{
                  backgroundImage: `url(${post.image})`,
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
                    bgcolor: "rgba(0, 0, 0, 0.5)",
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
                    {post.title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ bgcolor: "success.main", color: "#ffffff" }}
                    onClick={handleReadMore}
                  >
                    Read More
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
