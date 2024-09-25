import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
} from "@mui/material";

interface UpcomingCardProps {
  image: string;
  title: string;
  category: string;
  date: string;
  location: string;
  price: string;
}

const UpcomingCard: React.FC<UpcomingCardProps> = ({
  image,
  title,
  category,
  date,
  location,
  price,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "3 / 4",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 4,
        }}
      />

      <CardContent>
        <Chip
          label={category}
          sx={{
            backgroundColor: "#ff9800",
            color: "light.main",
            mb: 1,
          }}
        />
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {date} | {location}
        </Typography>

        <Typography variant="body2" sx={{ mt: 2 }}>
          {price}
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, backgroundColor: "#ff9800", color: "light.main" }}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingCard;
