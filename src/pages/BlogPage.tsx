import React from "react";
import {
  Box,
  Grid,
  Card,
  Typography,
  Button,
} from "@mui/material";
import Layout from "../Layout";

const BlogPage = () => {
  return (
    <Layout>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 4, color: "#ffffff" }}>
        Eco-Friendly Tips & News
      </Typography>

      <Box sx={{ maxWidth: "100%", overflowY: "auto", px: 4, mb: 6 }}>
        <Grid container spacing={4}>

          <Grid item xs={12} md={8}>
            <Card
              sx={{
                backgroundImage: 'url("http://img.zcool.cn/community/01a349556527710000008ec95520c7.jpg@2o.jpg")', 
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
                <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
                  Featured: The Top Eco-Friendly Habits to Start Today
                </Typography>
                <Typography variant="body1" sx={{ mb: 2, color: "#ffffff" }}>
                  Learn how these simple eco-friendly habits can help you make a positive impact on the planet.
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}>
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>

          
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: 'url("https://t4.ftcdn.net/jpg/06/04/25/67/360_F_604256779_amJh8y1RKHPwtHGNN5NCQJDiTrrUWGgS.jpg")', 
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
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
                  How to Reduce Plastic in Your Daily Life
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}>
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>

          
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: 'url("https://tse2.mm.bing.net/th?id=OIP.zBWANUITH4fqA19m1TeuQAHaE7&pid=Api&P=0&h=180")', 
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
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
                  10 Ways to Conserve Water at Home
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}>
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: 'url("https://i.ytimg.com/vi/UUJiDUDOtL8/hqdefault.jpg")', 
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
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
                  Renewable Energy: The Future of Green Technology
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}>
                  Read More
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1601568873917-1d9f126f645f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60")', 
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
                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ color: "#ffffff" }}>
                  Composting 101: Turn Your Waste Into Gold
                </Typography>
                <Button variant="contained" sx={{ backgroundColor: "#4caf50", color: "#ffffff" }}>
                  Read More
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
