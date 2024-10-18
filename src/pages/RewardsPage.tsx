import React, { useState, useEffect } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Layout from "../Layout";
import { useTranslation } from "react-i18next"; // Import the translation hook
import Image1 from "../eco images/bulp.jpg";
import Image2 from "../eco images/GB.webp";
import Image3 from "../eco images/SOlar.webp";
import Image4 from "../eco images/TB.jpg";
import Image5 from "../eco images/wrap.jpg";

const RewardsPage = () => {
  const { t, i18n } = useTranslation(); // Initialize translation hook
  const [selectedCategory, setSelectedCategory] = useState<string>("all"); // Default category as 'all'
  const [currency, setCurrency] = useState<string>("points");
  const [open, setOpen] = useState(false);
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const conversionRate = 3.5;

  const rewards = [
    {
      id: 1,
      category: "recyclableMaterials", // Using key as category, not translated value
      name: t("Reusable Grocery Bags (Pack of 10)"),
      points: 10000,
      discount: "-5%",
      image: Image2,
      description: t(
        "High quality reusable grocery bags made from eco-friendly materials."
      ),
    },
    {
      id: 2,
      category: "energySaving",
      name: t("Solar-powered Phone Charger"),
      points: 35000,
      discount: "-10%",
      image: Image3,
      description: t("Eco-friendly solar-powered charger for your phone."),
    },
    {
      id: 3,
      category: "personalCare",
      name: t("Bamboo Toothbrush Set (Pack of 4)"),
      points: 5500,
      discount: "",
      image: Image4,
      description: t("Sustainable bamboo toothbrush set with soft bristles."),
    },
    {
      id: 4,
      category: "energySaving",
      name: t("Energy-Efficient LED Bulbs (Pack of 6)"),
      points: 20000,
      discount: "-15%",
      image: Image1,
      description: t("Energy-efficient LED bulbs that save power and last longer."),
    },
    {
      id: 5,
      category: "sustainableLiving",
      name: t("Compostable Food Wraps (Set of 3)"),
      points: 15000,
      discount: "-8%",
      image: Image5,
      description: t("Compostable food wraps, a great alternative to plastic."),
    },
  ];

  // Filter rewards based on selected category
  const filteredRewards =
    selectedCategory === "all"
      ? rewards
      : rewards.filter((item) => item.category === selectedCategory);

  // Convert points to MYR
  const convertToMYR = (points: number) => Math.floor(points / conversionRate);

  const handleRedeem = (reward: any) => {
    setSelectedReward(reward);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReward(null);
  };

  const handleQuantityChange = (change: number) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  // Reset selected category when the language changes
  useEffect(() => {
    setSelectedCategory("all"); // Reset to 'all' whenever the language changes
  }, [i18n.language]); // This effect will run whenever the language changes

  return (
    <Layout>
      <Box
        sx={{
          p: 4,
          minHeight: "100vh",
        }}
      >
        <Typography variant="h2" align="center" fontWeight="bold" sx={{ my: 2 }}>
          {t("rewardsPageTitle")}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: 2,
            position: "relative",
            width: "200px",
            height: "50px",
            borderRadius: "25px",
            bgcolor: "#a7d8a0",
            m: "auto",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: currency === "points" ? 0 : "50%",
              width: "50%",
              height: "100%",
              bgcolor: "success.main",
              borderRadius: "25px",
              transition: "left 0.3s ease",
            }}
          />

          <Button
            onClick={() => setCurrency("points")}
            sx={{
              width: "50%",
              zIndex: 2,
              color: currency === "points" ? "light.main" : "dark.main",
              fontWeight: currency === "points" ? "bold" : "normal",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            {t("points")}
          </Button>

          <Button
            onClick={() => setCurrency("myr")}
            sx={{
              width: "50%",
              zIndex: 2,
              color: currency === "myr" ? "light.main" : "dark.main",
              fontWeight: currency === "myr" ? "bold" : "normal",
              bgcolor: "transparent",
              "&:hover": {
                bgcolor: "transparent",
              },
            }}
          >
            {t("myr")}
          </Button>
        </Box>

        <Box sx={{ mt: 4 }} />

        <Container>
          <Grid container spacing={2} justifyContent="center" sx={{ mb: 3 }}>
            {[
              { key: "all", label: t("all") },
              { key: "recyclableMaterials", label: t("recyclableMaterials") },
              { key: "energySaving", label: t("energySaving") },
              { key: "personalCare", label: t("personalCare") },
              { key: "sustainableLiving", label: t("sustainableLiving") },
            ].map((category) => (
              <Grid item key={category.key}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    bgcolor: "#6c9b6f",
                    color: "light.main",
                    "&:hover": {
                      bgcolor: "success.main",
                    },
                  }}
                  onClick={() => setSelectedCategory(category.key)} // Use category key here
                >
                  {category.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={3}>
            {filteredRewards.map((reward) => (
              <Grid item xs={12} sm={6} md={4} key={reward.id}>
                <Card
                  sx={{
                    bgcolor: "#f1f8f4",
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <CardContent>
                    <Box
                      component="img"
                      src={reward.image}
                      alt={reward.name}
                      sx={{
                        width: "100%",
                        height: "150px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <Typography variant="h5" sx={{ color: "#2d6a4f", mt: 2 }}>
                      {reward.name}
                    </Typography>

                    <Typography sx={{ color: "primary.dark" }}>
                      {currency === "points"
                        ? `${reward.points} ${t("points")}`
                        : `MYR ${convertToMYR(reward.points)}`}
                    </Typography>

                    {reward.discount && (
                      <Typography variant="body2" color="textSecondary">
                        {reward.discount}
                      </Typography>
                    )}
                  </CardContent>

                  <CardActions>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "primary.dark",
                        borderColor: "success.main",
                        "&:hover": {
                          bgcolor: "#6c9b6f",
                          color: "light.main",
                        },
                      }}
                      onClick={() => handleRedeem(reward)}
                    >
                      {t("redeem")}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          {selectedReward && (
            <>
              <DialogTitle>
                {selectedReward.name}
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
                  <Box flex="1" pr={2}>
                    <Box
                      component="img"
                      src={selectedReward.image}
                      alt={selectedReward.name}
                      sx={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </Box>

                  <Box flex="1" pl={2}>
                    <Typography variant="h6" sx={{ color: "#2d6a4f", mb: 2 }}>
                      {selectedReward.description}
                    </Typography>

                    <Typography sx={{ color: "primary.dark", mb: 2 }}>
                      {currency === "points"
                        ? `${selectedReward.points} ${t("points")}`
                        : `MYR ${convertToMYR(selectedReward.points)}`}
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                      <Button onClick={() => handleQuantityChange(-1)}>-</Button>
                      <TextField
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Math.max(1, parseInt(e.target.value, 10)))
                        }
                        inputProps={{ min: 1, style: { textAlign: "center" } }}
                        sx={{ width: "50px", mx: 2 }}
                      />
                      <Button onClick={() => handleQuantityChange(1)}>+</Button>
                    </Box>

                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        bgcolor: "success.main",
                        color: "light.main",
                        mt: 2,
                        "&:hover": {
                          bgcolor: "#388e3c",
                        },
                      }}
                      onClick={handleClose}
                    >
                      {t("confirmRedemption")}
                    </Button>
                  </Box>
                </Box>
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </Layout>
  );
};

export default RewardsPage;
