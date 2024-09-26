import React from "react";
import {
  Typography,
  Grid,
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Container,
} from "@mui/material";
import Layout from "../Layout";

export const CollaborationPage = () => {
  // Sample data for the select fields
  const countries = ["USA", "Canada", "UK", "Germany", "France"];
  const purposes = ["Partnership", "Marketing", "Supply", "Other"];

  return (
    <Layout>
      <Container
        sx={{
          flexGrow: 1,
          py: 4,
          background: "linear-gradient(145deg, #6a3093, #a044ff)",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            align="center"
            fontWeight="bold"
            sx={{ mt: 4, mb: 4 }}
          >
            Collaboration
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              p: 4,
              borderRadius: "12px",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h5" align="center" sx={{ mb: 2 }}>
                Startree is the real-time analytics platform trusted in
                production by some of the world's fastest growing startups.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  bgcolor: "background.paper",
                  p: 4,
                  borderRadius: "12px",
                  boxShadow: 3,
                }}
              >
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
                <TextField
                  label="URL"
                  variant="outlined"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
                <TextField
                  label="Remarks"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
                <FormControl
                  variant="outlined"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                >
                  <InputLabel>Country</InputLabel>
                  <Select label="Country" defaultValue="">
                    {countries.map((country, index) => (
                      <MenuItem key={index} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                >
                  <InputLabel>Purpose</InputLabel>
                  <Select label="Purpose" defaultValue="">
                    {purposes.map((purpose, index) => (
                      <MenuItem key={index} value={purpose}>
                        {purpose}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl
                  variant="outlined"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                >
                  <InputLabel>Mobile Prefix</InputLabel>
                  <Select label="Mobile Prefix" defaultValue="">
                    <MenuItem value="+1">+1</MenuItem>
                    <MenuItem value="+44">+44</MenuItem>
                    <MenuItem value="+49">+49</MenuItem>
                    <MenuItem value="+33">+33</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  label="Mobile Number"
                  variant="outlined"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>{" "}
        </Box>
      </Container>
    </Layout>
  );
};

export default CollaborationPage;
