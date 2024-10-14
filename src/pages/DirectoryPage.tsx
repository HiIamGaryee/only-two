import React, { useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import Layout from "../Layout";
import SearchIcon from "@mui/icons-material/Search";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LatLngExpression } from "leaflet";
const recyclingSectors = [
  {
    title: "Plastic Recycling",
    description: "Turn your plastic waste into valuable resources.",
    position: L.latLng(51.5074, -0.1278), // Central London
  },
  {
    title: "Organic Composting",
    description: "Create compost for agricultural use from organic waste.",
    position: L.latLng(51.5126, -0.1116), // Hyde Park
  },
  {
    title: "Electronic Disposal",
    description: "Safely dispose of electronic waste.",
    position: L.latLng(51.5205, -0.093), // Shoreditch
  },
  {
    title: "Metal Recycling",
    description: "Recycle metals to reduce the environmental impact of mining.",
    position: L.latLng(51.5285, -0.0847), // Camden
  },
  {
    title: "Paper Recycling",
    description: "Help reduce deforestation by recycling paper products.",
    position: L.latLng(51.5028, -0.0877), // The Shard
  },
  {
    title: "Glass Recycling",
    description: "Recycle glass to save energy and raw materials.",
    position: L.latLng(51.5099, -0.1342), // Oxford Street
  },
  {
    title: "Clothing Recycling",
    description: "Give old clothes a new life and help those in need.",
    position: L.latLng(51.5299, -0.0707), // Hackney
  },
  {
    title: "Furniture Recycling",
    description: "Donate old furniture to extend its life.",
    position: L.latLng(51.5407, -0.1436), // Hampstead
  },
  {
    title: "Battery Recycling",
    description:
      "Proper disposal of batteries to prevent environmental contamination.",
    position: L.latLng(51.5161, -0.1048), // Holborn
  },
  {
    title: "Automotive Recycling",
    description: "Responsible recycling of automotive parts and fluids.",
    position: L.latLng(51.4851, -0.1749), // Kensington
  },
  {
    title: "Chemical Disposal",
    description: "Safe disposal of hazardous household chemicals.",
    position: L.latLng(51.4941, -0.1749), // Chelsea
  },
  {
    title: "Construction Waste Recycling",
    description: "Reprocess construction waste for new building materials.",
    position: L.latLng(51.513, -0.0983), // The City
  },
  {
    title: "Food Waste Recycling",
    description: "Turn your food scraps into compost for community gardens.",
    position: L.latLng(51.508, -0.1281), // Victoria
  },
  {
    title: "Tyre Recycling",
    description: "Recycle used tyres to create rubber mulch for playgrounds.",
    position: L.latLng(51.5096, -0.1967), // Notting Hill
  },
  {
    title: "Biodegradable Materials Processing",
    description: "Process biodegradable materials to minimize landfill use.",
    position: L.latLng(51.5004, -0.1784), // Buckingham Palace area
  },
];

const DirectoryPage = () => {
  const center = L.latLng(51.5079, -0.0877);
  const mapRef = useRef<L.Map | null>(null);

  const handleMarkerClick = (position: any) => {
    const map = mapRef.current;
    if (map) {
      map.flyTo(position, 15); // Fly to the marker position at zoom level 15
    }
  };

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
        <Box sx={{ maxWidth: 1200, margin: "auto", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            Recycling Directory
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search recycling centers or areas"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 4 }}
          />

          <MapContainer
            center={center}
            zoom={12}
            style={{
              height: "400px",
              width: "100%",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {recyclingSectors.map((sector, index) => (
              <Marker
                key={index}
                position={sector.position}
                eventHandlers={{
                  click: () => handleMarkerClick(sector.position),
                }}
              >
                <Popup>
                  {sector.title}
                  <br />
                  {sector.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          <Grid container spacing={4} justifyContent="center">
            {recyclingSectors.map((sector, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3,
                    boxShadow: 4,
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {sector.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                      {sector.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default DirectoryPage;
