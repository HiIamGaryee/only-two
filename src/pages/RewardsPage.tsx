import React, { useState } from "react";
import { Typography, AppBar, Toolbar, Button, Grid, Card, CardContent, CardActions, Container, Box } from "@mui/material";
import Layout from "../Layout";

export const RewardsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const rewards = [
    { id: 1, category: "Recyclable Materials", name: "Reusable Grocery Bags (Pack of 10)", points: "10,000", discount: "-5%" },
    { id: 2, category: "Energy Saving", name: "Solar-powered Phone Charger", points: "35,000", discount: "-10%" },
    { id: 3, category: "Personal Care", name: "Bamboo Toothbrush Set (Pack of 4)", points: "5,500", discount: "" },
    { id: 4, category: "Energy Saving", name: "Energy-Efficient LED Bulbs (Pack of 6)", points: "20,000", discount: "-15%" },
    { id: 5, category: "Sustainable Living", name: "Compostable Food Wraps (Set of 3)", points: "15,000", discount: "-8%" },
    { id: 6, category: "Recyclable Materials", name: "Recycled Paper Notebooks (Set of 5)", points: "12,000", discount: "" },
    { id: 7, category: "Eco-Friendly Gadgets", name: "Biodegradable Phone Case", points: "8,000", discount: "-5%" },
    { id: 8, category: "Sustainable Living", name: "Stainless Steel Straws (Pack of 6)", points: "6,000", discount: "-10%" },
    { id: 9, category: "Personal Care", name: "Organic Cotton Reusable Face Mask", points: "4,500", discount: "" },
    { id: 10, category: "Eco-Friendly Gadgets", name: "Solar-Powered Outdoor Lights (Set of 4)", points: "25,000", discount: "-12%" },
  ];

  const filteredRewards = selectedCategory === "All"
    ? rewards
    : rewards.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      {/* App Bar Section */}
      <AppBar position="static" sx={{ backgroundColor: "#4CAF50" }}>
        <Toolbar>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/movies">Movies</Button>
          <Button color="inherit" href="/profile">Profile</Button>
          <Button color="inherit" href="/login">Login</Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h2" align="center" fontWeight="bold" sx={{ my: 2 }}>
        Rewards Page
      </Typography>

      <Container>
        <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
          {["All", "Recyclable Materials", "Energy Saving", "Personal Care", "Sustainable Living", "Eco-Friendly Gadgets"].map(category => (
            <Grid item key={category}>
              <Button
                variant="contained"
                color="success"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container>
        <Grid container spacing={3}>
          {filteredRewards.map((reward) => (
            <Grid item xs={12} sm={6} md={4} key={reward.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{reward.name}</Typography>
                  <Typography>{reward.points} points</Typography>
                  {reward.discount && <Typography variant="body2" color="textSecondary">{reward.discount}</Typography>}
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined" color="success">Redeem</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  );
};

export default RewardsPage;
