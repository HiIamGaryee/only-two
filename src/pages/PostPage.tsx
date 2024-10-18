import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  Modal,
  IconButton,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import Image1 from "../eco images/habits.jpg";
import { Facebook, WhatsApp, ContentCopy } from "@mui/icons-material";
import { useTranslation } from "react-i18next"; // Import the translation hook

const PostPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); // Initialize translation
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState(window.location.href); // Set the URL to share

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert(t("copySuccess")); // Use translation for alert
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
          {t("returnToBlog")} {/* Use translation for button */}
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
            variant="h3"
            fontWeight="bold"
            gutterBottom
            mt={4}
            sx={{ color: "light.main", textAlign: "center" }}
          >
            {t("post_title")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 2, color: "light.main", textAlign: "center" }}
          >
            {t("post_desc")}
          </Typography>
        </Box>
      </Box>

      <Container>
        <Box sx={{ maxWidth: "800px", margin: "auto", textAlign: "left" }}>
          <Typography
            variant="h4"
            sx={{ mb: 2, color: "#388e3c", fontWeight: "bold" }}
          >
            {t("intro_title")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {t("intro_desc")}
          </Typography>

          <Typography
            variant="h5"
            sx={{ mb: 2, color: "#388e3c", fontWeight: "bold" }}
          >
            {t("simpleHabitsTitle")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {t("simpleHabitsDescription")}
          </Typography>

          <ul style={{ lineHeight: 2, color: "#388e3c" }}>
            <li>{t("habit1")}</li>
            <li>{t("habit2")}</li>
            <li>{t("habit3")}</li>
            <li>{t("habit4")}</li>
            <li>{t("habit5")}</li>
          </ul>

          <Typography
            variant="h5"
            sx={{ mt: 4, mb: 2, color: "#388e3c", fontWeight: "bold" }}
          >
            {t("impactTitle")}
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            {t("impactDescription")}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "success.main", color: "light.main" }}
              onClick={handleOpen}
            >
              {t("shareThisPost")}
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Modal for sharing options */}
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
            width: 350,
            bgcolor: "background.paper",
            borderRadius: "10px", // Make the window rounded
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            {t("sharePost")} {/* Use translation for modal title */}
          </Typography>

          {/* Display the URL */}
          <TextField
            value={url}
            InputProps={{
              readOnly: true,
            }}
            sx={{
              mb: 2,
              textAlign: "center",
              width: "100%",
              "& .MuiInputBase-root": {
                borderRadius: "50px",
              },
            }}
          />

          <Typography variant="body1" sx={{ mb: 2 }}>
            {t("shareOptions")} {/* Use translation for share options */}
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-around", mb: 2 }}>
            {/* WhatsApp Share */}
            <IconButton
              color="success"
              component="a"
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                url
              )}`}
              target="_blank"
            >
              <WhatsApp />
            </IconButton>

            {/* Facebook Share */}
            <IconButton
              color="primary"
              component="a"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
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

          <Button
            onClick={handleClose}
            variant="contained"
            sx={{
              bgcolor: "success.main",
              color: "light.main",
              borderRadius: "50px", // Round the Close button
              px: 4, // Add padding
            }}
          >
            {t("close")} {/* Use translation for Close button */}
          </Button>
        </Box>
      </Modal>
    </Layout>
  );
};

export default PostPage;
