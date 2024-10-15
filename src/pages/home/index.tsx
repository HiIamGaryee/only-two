import { Box, Typography, Button, Stack, Grid, Avatar } from "@mui/material";

import { useNavigate } from "react-router-dom";
import homeBg from "../../assets/home-bg.png";
import Layout from "../../Layout";
import usq2Img from "../../assets/go-green/usq-2.svg";
import usq1Img from "../../assets/go-green/usq-1.svg";
import usq3Img from "../../assets/go-green/usq-3.svg";
import StatisticsSection from "../../components/StatisticsSection";
import TestimonialsCard from "../../components/TestimonialsCard";

const USPList = [
  {
    img: usq1Img,
    name: "Partnerships with Eco Organizations",
  },
  {
    img: usq2Img,
    name: "Green Blog and News Updates",
  },
  {
    img: usq3Img,
    name: "Eco Rewards Program ",
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Grid
        container
        p={4}
        sx={{
          backgroundImage: `url(${homeBg})`,
          backgroundSize: "100% 100%",
          minHeight: "500px",
          objectFit: "cover",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignitem: { xs: "center", md: "start" },
            justifyContent: "center",
            pl: { xs: 0, md: 8 },
            order: { xs: 2, md: 1 },
          }}
        >
          <Stack spacing={2}>
            <Box>
              <Stack spacing={4}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: { xs: "center", md: "start" },
                    }}
                  >
                    <Typography variant="h3" fontWeight="bold">
                      Go Green
                    </Typography>
                    <Typography
                      color="primary.main"
                      variant="h3"
                      fontWeight="bold"
                    >
                      It's the New Black
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  color="light.main"
                  px={2}
                  sx={{
                    textAlign: { xs: "center", md: "start" },
                    pl: { xs: 2, md: 0 },
                    pr: { xs: 2, md: 12 },
                  }}
                >
                  Your trust with us starts from knowing your eco-friendly
                  choices.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: { xs: "center", md: "start" },
                  }}
                >
                  <Button variant="text" onClick={() => navigate(`/about-us`)}>
                    About Us
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignitem: "center",
            justifyContent: "center",
            order: { xs: 1, md: 2 },
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              mt: { xs: 8, md: 0 },
              maxHeight: "500px",
              display: "none",
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
          flexDirection: "column",
          p: 8,
          bgcolor: "#f4eee1",
        }}
      >
        <Typography variant="h4" fontWeight="bold" mb={2}>
          Our Selling Point
        </Typography>
        <Typography px={8} textAlign="center" mb={6}>
          Our cyrpto payments and tokenized rewards cater to tech-savvy
          customers, enhacing user engagement and loyalty.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", width: "auto" }}>
          <Grid container>
            {USPList.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexDirection: "row",
                    alignItems: "center ",
                  }}
                >
                  <Avatar
                    src={item.img}
                    sx={{
                      width: 80,
                      height: 80,
                      bgcolor: "transparent",
                      "& img": {
                        width: 55,
                        height: 55,
                        margin: "auto",
                      },
                      border: (theme) =>
                        `1px solid ${theme.palette.text.secondary}`,
                    }}
                  />

                  <Typography>{item.name}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <StatisticsSection />
      <TestimonialsCard />
    </Layout>
  );
};

export default HomePage;
