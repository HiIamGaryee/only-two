import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import Layout from "../../Layout";
import { Phone, Email, Instagram, LocationOn } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MarketingIcon from "@mui/icons-material/LocalOffer";
import BusinessIcon from "@mui/icons-material/BusinessCenter";
import CreativeIcon from "@mui/icons-material/Brush";
import WebIcon from "@mui/icons-material/Web";
import { getAboutUs } from "../../api";
import { useQuery } from "@tanstack/react-query";

const contactList = [
  { icon: <Phone color="primary" />, text: "(+081) 5678 1234", label: "Phone" },
  { icon: <Email color="primary" />, text: "mail@example.com", label: "Email" },
  {
    icon: <LocationOn color="primary" />,
    text: "London Eye, London",
    label: "Address",
  },
  {
    icon: <Instagram color="primary" />,
    text: "@username",
    label: "Instagram",
  },
];

const services = [
  {
    title: "Marketing",
    description:
      "Craft relevant content with ads across all platforms to increase your online visibility.",
    icon: <MarketingIcon color="primary" />,
  },
  {
    title: "Solution",
    description:
      "Cut through business clutter with clear and precise strategies tailored to your needs.",
    icon: <BusinessIcon color="primary" />,
  },
  {
    title: "Creative",
    description:
      "Develop beautiful layouts that make your project stand out from the competition.",
    icon: <CreativeIcon color="primary" />,
  },
  {
    title: "Development",
    description:
      "Create robust platforms that facilitate easier client interactions and functionality.",
    icon: <WebIcon color="primary" />,
  },
];

const AboutUs = () => {
  const { data: aboutData } = useQuery({
    queryKey: ["aboutUs"],
    queryFn: getAboutUs,
  });

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "light.main",
          color: "white",
          padding: 4,
          minHeight: "100vh",
        }}
      >
        {/* <p>
          <strong>About:</strong> {aboutData?.about}
        </p> */}

        <Box sx={{ maxWidth: 1200, margin: "auto", textAlign: "center" }}>
          {/* Original About Us Content */}
          <Typography variant="h4" gutterBottom fontWeight="bold">
            About Us Page
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 4 }}>
            Our mission is to lead the industry in creating value for ourselves
            and our partners by revolutionizing the way people experience
            products. Our team is dedicated to pushing the boundaries of what's
            possible, striving to set standards rather than follow them.
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, boxShadow: 4 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight="bold"
                  align="center"
                >
                  Our Products
                </Typography>
                <Typography align="center">
                  We offer a range of high-quality products that integrate
                  seamlessly with your daily life, enhancing your efficiency and
                  enjoyment.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, boxShadow: 4 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  fontWeight="bold"
                  align="center"
                >
                  Our Vision
                </Typography>
                <Typography align="center">
                  To be recognized as the most innovative company in our
                  industry, providing solutions that improve the quality of life
                  worldwide.
                </Typography>
              </Card>
            </Grid>
          </Grid>

          {/* New Get In Touch Section */}
          <Box sx={{ flexGrow: 1, p: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              component="div"
              textAlign="center"
            >
              Service We Provide
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} md={3}>
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          gap: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{ alignItems: "center", display: "flex" }}
                        >
                          {service.icon}
                        </Typography>
                        <Typography variant="h5">{service.title}</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" mt={2}>
                        {service.description}
                      </Typography>
                    </CardContent>
                    <Box sx={{ p: 2 }}>
                      <Button>Learn More</Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Box>
                <Typography variant="h4" align="left" fontWeight="bold">
                  Get In Touch
                </Typography>
                <Typography align="left" color="secondary.main">
                  Get In Touch Desc
                </Typography>
              </Box>
              <Grid container spacing={2} justifyContent="center">
                {contactList.map((contact, index) => (
                  <Grid item xs={12} md={6} key={index} gap={2}>
                    <Typography variant="h3">{contact.icon}</Typography>
                    <Typography variant="body1" fontWeight="bold">
                      {contact.text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ display: "flex", gap: 2 }}>
                <Link href="#">
                  <FacebookIcon />
                </Link>
                <Link href="#">
                  <InstagramIcon />
                </Link>
                <Link href="#">
                  <TwitterIcon />
                </Link>
                <Link href="#">
                  <LinkedInIcon />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <TextField
                  label="Email"
                  variant="filled"
                  sx={{ bgcolor: "light.main" }}
                />
                <TextField
                  label="Name"
                  variant="filled"
                  sx={{ bgcolor: "light.main" }}
                />
                <TextField
                  label="Phone"
                  variant="filled"
                  sx={{ bgcolor: "light.main" }}
                />
                <TextField
                  label="Message"
                  variant="filled"
                  multiline
                  rows={4}
                  sx={{ bgcolor: "light.main" }}
                />
                <Button sx={{ mt: 2 }}>Submit</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default AboutUs;
