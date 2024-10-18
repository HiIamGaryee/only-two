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
import { useTranslation } from "react-i18next";
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
    quote: "testimonial_quote_one",
    author: "Serhiy Hipskyy",
    role: "premium_member",
    avatar: avatar,
  },
  {
    id: 2,
    quote: "testimonial_quote_two",
    author: "Justus Menke",
    role: "conscious_consumer",
    avatar: avatar2,
  },
  {
    id: 3,
    quote: "testimonial_quote_three",
    author: "Hayden Lee",
    role: "sustainability_advocate",
    avatar: avatar3,
  },
];

const TestimonialsCard = () => {
  const theme = useTheme();
  const { t } = useTranslation();

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
        {t("what_our_happy_users_say")}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={4} key={testimonial.id}>
            <CustomCard raised>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <Typography variant="h6" sx={{ fontStyle: "italic", mb: 2 }}>
                  "{t(testimonial.quote)}"
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                  <Box>
                    <Typography fontWeight="bold" textAlign="start">
                      {testimonial.author}
                    </Typography>
                    <Typography
                      variant="caption"
                      textAlign="start"
                      color="text.secondary"
                    >
                      {t(testimonial.role)}
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
