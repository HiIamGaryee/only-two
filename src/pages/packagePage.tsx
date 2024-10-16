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
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";

const packageList = [
  {
    id: "member",
    name: "Member",
    monthlyPrice: "$10 / Per Month",
    annuallyPrice: "$100 / Per Year",
    description:
      "Ideal for individuals seeking to engage with eco-friendly practices and earn rewards.",
    features: [
      "Access to exclusive educational content on sustainability",
      "Participation in eco-friendly challenges and competitions",
      "Earn points for each eco-friendly activity, redeemable for gifts or discounts",
      "First access to new eco workshops and webinars",
    ],
    customers: "Preferred by eco-conscious individuals worldwide",
  },
  {
    id: "premium_member",
    name: "Premium Member",
    monthlyPrice: "$12 / Per Month",
    annuallyPrice: "$120 / Per Year",
    description:
      "Enhanced membership for those committed to making a significant impact.",
    features: [
      "All benefits of a regular member",
      "Double points on all eco-friendly activities",
      "Exclusive access to an AI bot that provides instant answers to eco-related queries",
      "Priority booking for exclusive events and workshops",
    ],
    customers: "Chosen by dedicated eco-warriors looking for maximum impact",
  },
  {
    id: "partner",
    name: "Partner",
    monthlyPrice: "Custom",
    annuallyPrice: "Custom",
    description:
      "Suitable for businesses and organizations committed to eco-friendly products and services.",
    features: [
      "Opportunity to advertise your eco-friendly products on our platform",
      "Feature your initiatives in our monthly eco-focused newsletter",
      "Customized insights and analytics on your ad performance",
      "Direct involvement in major eco-projects and campaigns",
      "Strategic branding opportunities across various platform channels",
    ],
    customers: "Ideal for eco-conscious brands seeking a targeted audience",
  },
];

const PackagePage = () => {
  const [pricingPeriod, setPricingPeriod] = useState("monthly");
  const navigate = useNavigate();

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
          bgcolor: "light.main",
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
          Join over 1 Million user using Go Green
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
                  <Typography variant="h5" color="primary.main" mb={1}>
                    {pkg.name}
                  </Typography>

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
                    {pkg.features.map((feature: any, index: number) => (
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
                    onClick={() => navigate(`/payment`)}
                    disabled={pkg.id === "partner"}
                  >
                    {pkg.id === "partner"
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
