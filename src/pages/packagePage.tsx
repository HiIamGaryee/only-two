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
import { useTranslation } from "react-i18next";

const packageList = [
  {
    id: "member",
    name: "package_one_name",
    monthlyPrice: "$10",
    annuallyPrice: "$100",
    description: "package_one_desc",
    features: [
      "package_one_feature_one",
      "package_one_feature_two",
      "package_one_feature_three",
      "package_one_feature_four",
    ],
    customers: "package_one_customers",
  },
  {
    id: "premiumMember",
    name: "package_two_name",
    monthlyPrice: "$12",
    annuallyPrice: "$120",
    description: "package_two_desc",
    features: [
      "package_two_feature_one",
      "package_two_feature_two",
      "package_two_feature_three",
      "package_two_feature_four",
    ],
    customers: "package_two_customers",
  },
  {
    id: "partner",
    name: "package_three_name",
    monthlyPrice: "Custom",
    annuallyPrice: "Custom",
    description: "package_three_desc",
    features: [
      "package_three_feature_one",
      "package_three_feature_two",
      "package_three_feature_three",
      "package_three_feature_four",
      "package_three_feature_five",
    ],
    customers: "package_three_customers",
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
  const { t } = useTranslation();

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
          {t("join_million_users")}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          <span>{t("free_trial")}</span> • <span>{t("cancel_anytime")}</span> •{" "}
          <span>{t("secure_payment")}</span>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <ToggleButtonGroup
            value={pricingPeriod}
            exclusive
            onChange={handleToggle}
            aria-label="pricing period"
          >
            <ToggleButton value="monthly" aria-label="monthly">
              {t("monthly")}
            </ToggleButton>
            <ToggleButton value="annually" aria-label="annually">
              {t("annually")}
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
                    {t(pkg.name)}
                  </Typography>

                  <Typography variant="body2"> {t(pkg.customers)}</Typography>
                  <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                      {pkg.monthlyPrice === "Custom" ||
                      pkg.annuallyPrice === "Custom"
                        ? t("custom")
                        : `${
                            pricingPeriod === "monthly"
                              ? pkg.monthlyPrice + " / " + t("per_month")
                              : pkg.annuallyPrice + " / " + t("per_year")
                          }`}
                    </Typography>
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {t(pkg.description)}
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
                        {t(feature)}
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
                      ? t("contact_sales")
                      : t("free_trial")}
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
