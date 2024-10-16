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

const AboutUsPage = () => {
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
              About Us
            </Typography>
            <List>
              <ListItem button>
                <ListItemText primary="Leadership" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Awards & Recognition" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Investors" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Suppliers" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="Compliance Overview" />
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
                  OUR STORY
                </Typography>
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                  We Support Sustainable Living & Green Innovation
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  Our mission is simple: to contribute to the growth of
                  sustainable and eco-friendly solutions by helping green
                  projects flourish. We believe that conscious living and
                  environmentally-friendly innovation are keys to preserving our
                  planet.
                  <br />
                  <br />
                  From eco-friendly products to green technology, we are
                  committed to supporting projects that not only reduce waste
                  but also have a lasting positive impact on our environment.
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
                  Why We Care About Sustainability
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  We focus on sustainability because we believe it is the
                  foundation for a thriving future. Our work supports innovative
                  projects that aim to reduce carbon footprints, save energy,
                  and enhance the use of renewable resources. We’re passionate
                  about helping the world move towards a more eco-conscious
                  lifestyle.
                  <br />
                  <br />
                  Whether it's through contributing to renewable energy,
                  sustainable agriculture, or eco-friendly products, we are here
                  to make a difference. Together, we can support a greener
                  planet for future generations.
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
                Get In Touch
              </Typography>
              <Typography variant="body1" color="text.secondary" gutterBottom>
                Reach out to us through the form below to learn more about our
                sustainability efforts.
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
                <TextField label="Your Name" variant="outlined" fullWidth />
                <TextField label="Your Email" variant="outlined" fullWidth />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                />
                <Button variant="contained" color="primary">
                  Submit
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
