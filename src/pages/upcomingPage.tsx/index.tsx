import React from "react";
import {
  Box,
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import UpcomingCard from "../../components/UpcomingCard";
import Layout from "../../Layout";
import upcomingOne from "../../assets/upcoming1.jpeg";
import upcomingTwo from "../../assets/upcoming2.jpg";
import upcomingThree from "../../assets/upcoming3.jpeg";
import upcomingFour from "../../assets/upcoming4.jpeg";

const events = [
  {
    image: upcomingOne,
    title: "Milano 21T Meeting",
    category: "Business",
    date: "November 21, 2023",
    location: "Milan",
    price: "$199",
  },
  {
    image: upcomingTwo,
    title: "Gaming X2021 Fair",
    category: "Technology",
    date: "March 1, 2024",
    location: "San Francisco",
    price: "$179",
  },
  {
    image: upcomingThree,
    title: "IT Fair",
    category: "Technology",
    date: "March 11, 2024",
    location: "Malaysia",
    price: "$321",
  },
  {
    image: upcomingFour,
    title: "Harry Potter",
    category: "Business",
    date: "March 11, 2024",
    location: "KL",
    price: "$12",
  },
];

const UpcomingPage = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    "All"
  );

  const handleCategoryChange = (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => {
    if (newCategory !== null) {
      setSelectedCategory(newCategory);
    }
  };

  return (
    <Layout>
      <Box
        sx={{ padding: 4, backgroundColor: "light.main", color: "light.main" }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Upcoming Events{" "}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod
          tempor.
        </Typography>

        <ToggleButtonGroup
          value={selectedCategory}
          exclusive
          onChange={handleCategoryChange}
          aria-label="event category"
          sx={{ marginBottom: 4 }}
        >
          <ToggleButton value="All">All</ToggleButton>
          <ToggleButton value="Art">Art</ToggleButton>
          <ToggleButton value="Business">Business</ToggleButton>
          <ToggleButton value="Education">Education</ToggleButton>
          {/* Add more categories as needed */}
        </ToggleButtonGroup>

        <Grid container spacing={4}>
          {events.map((event, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <UpcomingCard
                image={event.image}
                title={event.title}
                category={event.category}
                date={event.date}
                location={event.location}
                price={event.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default UpcomingPage;
