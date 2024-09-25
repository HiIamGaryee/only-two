import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import Layout from "../../Layout";

const packageList = [
  {
    id: "basic",
    name: "Basic",
    monthlyPrice: "$8 / Per Month",
    annuallyPrice: "$80 / Per Year",
    description: "Best for blogs and personal websites",
    features: [
      "Cookie policy & banner",
      "Cookie script auto blocker",
      "10 pages per scan",
      "10,000 pageviews/month",
      "Basic customization",
    ],
    customers: "Chosen by 152k customers",
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: "$39 / Per Month",
    annuallyPrice: "$390 / Per Year",
    description: "Best for small businesses and startups",
    features: [
      "Cookie policy & banner",
      "Cookie script auto blocker",
      "Privacy regulation monitoring",
      "1000 pages per scan",
      "100,000 pageviews/month",
      "Geo-targeted cookie banner",
      "Remove Coonsept™ logo",
    ],
    customers: "Chosen by 82k customers",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    monthlyPrice: "Custom",
    annuallyPrice: "Custom",
    description: "Best for high traffic websites and resellers",
    features: [
      "Everything in Premium Plan",
      "Compliance consulting",
      "Training & onboarding",
      "Unlimited pages per scan",
      "Advanced customization",
    ],
    customers: "Chosen by 16k enterprises",
  },
];

const PackagePage = () => {
  const [pricingPeriod, setPricingPeriod] = useState("monthly");

  const handleToggle = (
    event: React.MouseEvent<HTMLElement>,
    newPeriod: string | null
  ) => {
    if (newPeriod !== null) {
      setPricingPeriod(newPeriod);
    }
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "light.main",

          p: 4,
          minHeight: "100vh",
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Join over 1 Million user using Brewed in chaos
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          <span>14-day free trial</span> • <span>Cancel anytime</span> •{" "}
          <span>Secure payment</span>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            value={pricingPeriod}
            exclusive
            onChange={handleToggle}
            aria-label="pricing period"
          >
            <ToggleButton value="monthly" aria-label="monthly">
              Monthly
            </ToggleButton>
            <ToggleButton value="annually" aria-label="annually">
              Annually
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Package Cards */}
        <Grid container spacing={4} justifyContent="center">
          {packageList.map((pkg) => (
            <Grid item xs={12} md={4} key={pkg.id}>
              <Card
                sx={{
                  borderRadius: 2,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                }}
              >
                <CardContent>
                  <Typography variant="body2">{pkg.customers}</Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                    {pricingPeriod === "monthly"
                      ? pkg.monthlyPrice
                      : pkg.annuallyPrice}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {pkg.description}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <ul style={{ paddingLeft: "20px", margin: 0 }}>
                    {pkg.features.map((feature, index) => (
                      <li
                        key={index}
                        style={{
                          marginBottom: "8px",
                          fontSize: "0.875rem",

                          textAlign: "left",
                        }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="contained"
                    sx={{ mt: 2 }}
                    fullWidth
                    disabled={pkg.id === "enterprise"} // Example: Enterprise plan needs contact
                  >
                    {pkg.id === "enterprise"
                      ? "Contact sales"
                      : "Start 14-day free trial"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
};

export default PackagePage;
