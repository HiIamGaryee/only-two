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
import { useTranslation } from "react-i18next";

const recyclingSectors = [
  {
    icon: "🍾",
    title: "plastic_recycling",
    description: "plastic_recycling_desc",
    position: L.latLng(51.5074, -0.1278), // Central London
  },
  {
    icon: "🌱",
    title: "organic_composting",
    description: "organic_composting_desc",
    position: L.latLng(51.5126, -0.1116), // Hyde Park
  },
  {
    icon: "📱",
    title: "electronic_disposal",
    description: "electronic_disposal_desc",
    position: L.latLng(51.5205, -0.093), // Shoreditch
  },
  {
    icon: "⚙️",
    title: "metal_recycling",
    description: "metal_recycling_desc",
    position: L.latLng(51.5285, -0.0847), // Camden
  },
  {
    icon: "⚙️",
    title: "paper_recycling",
    description: "paper_recycling_desc",
    position: L.latLng(51.5028, -0.0877), // The Shard
  },
  {
    icon: "🍷",
    title: "glass_recycling",
    description: "glass_recycling_desc",
    position: L.latLng(51.5099, -0.1342), // Oxford Street
  },
  {
    icon: "🧢",
    title: "clothing_recycling",
    description: "clothing_recycling_desc",
    position: L.latLng(51.5299, -0.0707), // Hackney
  },
  {
    icon: "🛋️",
    title: "furniture_recycling",
    description: "furniture_recycling_desc",
    position: L.latLng(51.5407, -0.1436), // Hampstead
  },
  {
    icon: "🔋",
    title: "battery_recycling",
    description: "battery_recycling_desc",
    position: L.latLng(51.5161, -0.1048), // Holborn
  },
  {
    icon: "🚗",
    title: "automotive_recycling",
    description: "automotive_recycling_desc",
    position: L.latLng(51.4851, -0.1749), // Kensington
  },
  {
    icon: "☣️",
    title: "chemical_disposal",
    description: "chemical_disposal_desc",
    position: L.latLng(51.4941, -0.1749), // Chelsea
  },
  {
    icon: "🚧",
    title: "construction_waste_recycling",
    description: "construction_waste_recycling_desc",
    position: L.latLng(51.513, -0.0983), // The City
  },
  {
    icon: "🌽",
    title: "food_waste_recycling",
    description: "food_waste_recycling_desc",
    position: L.latLng(51.508, -0.1281), // Victoria
  },
  {
    icon: "🏎️",
    title: "tyre_recycling",
    description: "tyre_recycling_desc",
    position: L.latLng(51.5096, -0.1967), // Notting Hill
  },
  {
    icon: "🌾",
    title: "biodegradable_materials_processing",
    description: "biodegradable_materials_processing_desc",
    position: L.latLng(51.5004, -0.1784), // Buckingham Palace area
  },
];

const DirectoryPage = () => {
  const center = L.latLng(51.5079, -0.0877);
  const mapRef = useRef<L.Map | null>(null);
  const { t } = useTranslation();
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
            {t("recycling_directory")}
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={t("search_recycle_area")}
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
                  {t(sector.title)}
                  <br />
                  {t(sector.description)}
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
                    <Typography variant="h4" component="div" textAlign="center">
                      {sector.icon}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {t(sector.title)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mt={2}>
                      {t(sector.description)}
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
