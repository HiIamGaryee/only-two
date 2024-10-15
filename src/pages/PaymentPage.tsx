import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  TextField,
  Divider,
  Switch,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  IconButton,
} from "@mui/material";
import Layout from "../Layout";

import VisaLogo from "../assets/go-green/usq-1.jpeg";
import PaypalLogo from "../assets/go-green/usq-1.jpeg";
import AmexLogo from "../assets/go-green/usq-1.jpeg";

const PaymentPage = () => {
  const [vatNumber, setVatNumber] = useState("");
  const [saveDetails, setSaveDetails] = useState(false);
  const [recurring, setRecurring] = useState(false);
  const [rechargeAmount, setRechargeAmount] = useState(10);

  return (
    <Layout>
      <Box
        sx={{
          padding: 4,
          backgroundColor: "#f9f9f9",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={4} justifyContent="center">
          {/* Payment Details Section */}
          <Grid item xs={12} md={8}>
            <Card variant="outlined" sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom>
                Add Promo Code
              </Typography>
              <TextField
                fullWidth
                label="Promo Code"
                variant="outlined"
                value={vatNumber}
                onChange={(e) => setVatNumber(e.target.value)}
                sx={{ mb: 2 }}
              />
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Payment method
              </Typography>
              <Box sx={{ display: "flex", mb: 2 }}>
                <IconButton>
                  <img src={VisaLogo} alt="Visa" style={{ width: 50 }} />
                </IconButton>
                <IconButton>
                  <img src={PaypalLogo} alt="PayPal" style={{ width: 50 }} />
                </IconButton>
                <IconButton>
                  <img
                    src={AmexLogo}
                    alt="American Express"
                    style={{ width: 50 }}
                  />
                </IconButton>
              </Box>
              <TextField
                fullWidth
                label="Cardholder Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth label="Expiry Date" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="CCV" variant="outlined" />
                </Grid>
              </Grid>
              <Box gap={1} sx={{ display: "flex", flexDirection: "column" }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={saveDetails}
                      onChange={() => setSaveDetails(!saveDetails)}
                    />
                  }
                  label="Save my payment details for future purchases"
                  sx={{ mt: 2 }}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={recurring}
                      onChange={() => setRecurring(!recurring)}
                    />
                  }
                  label="Enable recurring payments"
                  sx={{ mt: 1 }}
                />
                {recurring && (
                  <Box sx={{ mt: 2 }}>
                    <FormControl fullWidth>
                      <InputLabel>When my balance is below</InputLabel>
                      <Select
                        value={rechargeAmount}
                        label="When my balance is below"
                        onChange={(e) =>
                          setRechargeAmount(Number(e.target.value))
                        }
                      >
                        <MenuItem value={10}>€10.00</MenuItem>
                        <MenuItem value={100}>€100.00</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                )}
              </Box>
            </Card>
          </Grid>
          {/* Order Summary Section */}
          <Grid item xs={12} md={4}>
            <Card
              raised
              sx={{
                padding: 4,
                margin: "auto",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Order Summary
              </Typography>
              <Divider sx={{ my: 2 }} />

              {/* Each item in the order summary is a row with justified content */}
              <Grid container spacing={2} mb={4}>
                <Grid item xs={6}>
                  <Typography variant="body1">Balance amount:</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="body1">
                    <strong>€100.00</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body1">Promo (21%):</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="body1">
                    <strong>€21.00</strong>
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Typography variant="body1">Total:</Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    <strong>€121.00</strong>
                  </Typography>
                </Grid>
              </Grid>
              <Box
                sx={{ border: "1px solid #ebebeb", borderRadius: 4, p: 2 }}
                mb={4}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "text.secondary",
                  }}
                >
                  Account top up to
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  Go Green Sdn Bhd
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  <strong>€100.00</strong>
                </Typography>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: "100%" }}
                onClick={() => alert("Order Confirmed!")}
              >
                Confirm your order
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default PaymentPage;
