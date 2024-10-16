import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import Image1 from "../eco images/habits.jpg";
import { Facebook, WhatsApp, ContentCopy } from "@mui/icons-material";

const PostPage = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Post URL copied to clipboard!");
  };

  return (
    <Layout>
      <Box
        sx={{
          backgroundImage: `url(${Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          position: "relative",
          color: "light.main",
          mb: 4,
        }}
      >
        <Button
          onClick={() => navigate("/blog")}
          variant="contained"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            zIndex: 10,
            bgcolor: "success.main",
            color: "light.main",
          }}
        >
          Return to Blog
        </Button>

        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0, 0, 0, 0.5)",
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "light.main", textAlign: "center" }}
          >
            The Top Eco-Friendly Habits to Start Today
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: "light.main", textAlign: "center" }}
          >
            Discover how small eco-friendly habits can help you make a positive
            impact on the planet.
          </Typography>
        </Box>
      </Box>

      <Container>
        <Box sx={{ maxWidth: "800px", margin: "auto", textAlign: "left" }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#388e3c", fontWeight: "bold" }}
          >
            Introduction to Eco-Friendly Living
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Eco-friendly living is all about reducing your carbon footprint,
            conserving resources, and living a more sustainable lifestyle. Small
            actions can create lasting change, and by adopting eco-friendly
            habits, you can help preserve the planet for future generations.
          </Typography>

          <Typography
            variant="h5"
            sx={{ mb: 2, color: "#388e3c", fontWeight: "bold" }}
          >
            Simple Habits You Can Start Today
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Here are some simple habits that you can start today to make your
            life more eco-friendly:
          </Typography>

          <ul style={{ lineHeight: 2, color: "#388e3c" }}>
            <li>Switch to reusable bags, bottles, and containers.</li>
            <li>
              Reduce plastic use by opting for alternatives like glass or metal.
            </li>
            <li>Conserve water by fixing leaks and taking shorter showers.</li>
            <li>Compost food scraps to reduce waste.</li>
            <li>Support eco-friendly products and companies.</li>
          </ul>

          <Typography
            variant="h5"
            sx={{ mt: 4, mb: 2, color: "#388e3c", fontWeight: "bold" }}
          >
            The Impact of These Changes
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Every small change adds up. By reducing waste, conserving energy,
            and being mindful of our consumption, we can help reduce the harmful
            effects on the environment and create a healthier world for future
            generations.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "success.main", color: "light.main" }}
              onClick={handleOpen}
            >
              Share This Post
            </Button>
          </Box>
        </Box>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="share-modal"
        aria-describedby="share-options"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Share This Post
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Copy the link or share via:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
            {/* WhatsApp Share */}
            <IconButton
              color="success"
              component="a"
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
            >
              <WhatsApp />
            </IconButton>

            <IconButton
              color="primary"
              component="a"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                window.location.href
              )}`}
              target="_blank"
            >
              <Facebook />
            </IconButton>
            {/* Copy Link */}
            <IconButton color="secondary" onClick={handleCopy}>
              <ContentCopy />
            </IconButton>
          </Box>
          <Button onClick={handleClose} variant="contained" color="primary">
            Close
          </Button>
        </Box>
      </Modal>
    </Layout>
  );
};

export default PostPage;
