import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import avatar from "../assets/image-avatar.png";
import avatar2 from "../assets/image-avatar2.png";
import avatar3 from "../assets/image-avatar3.png";

// Enhanced Card with subtle shadow and hover effect
const CustomCard = styled(Card)(({ theme }) => ({
  transition: "0.3s",
  boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 40px 0 rgba(0,0,0,0.18)",
  },
}));

const testimonials = [
  {
    id: 1,
    quote:
      "I absolutely love the items I can redeem with my points. Always something exciting to look forward to!",
    author: "Serhiy Hipskyy",
    role: "Eco Enthusiast",
    avatar: avatar,
  },
  {
    id: 2,
    quote:
      "The rewards system is fantastic. It makes being environmentally conscious fun and rewarding!",
    author: "Justus Menke",
    role: "Conscious Consumer",
    avatar: avatar2,
  },
  {
    id: 3,
    quote:
      "Gaining main knowledge about sustainability has never been easier. This platform is a game-changer!",
    author: "Hayden Lee",
    role: "Sustainability Advocate",
    avatar: avatar3,
  },
];

const TestimonialsCard = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        p: 8,
        bgcolor: "#e8e7e5",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        sx={{ mb: 5, fontWeight: "bold", color: theme.palette.grey[800] }}
      >
        What Our Happy User Says
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={4} key={testimonial.id}>
            <CustomCard raised>
              <CardContent>
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
                  "{testimonial.quote}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.author}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </CustomCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsCard;
