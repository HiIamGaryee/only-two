import { Link } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const footerLinks = [
  {
    title: "SITEMAP",
    links: [
      { name: "About us", link: "/about-us" },
      { name: "Services", link: "/services" },
      // { name: "Blog", link: "/blog" },
      { name: "Upcoming Movies", link: "/upcoming-movies" },
    ],
  },
  {
    title: "HELP",
    links: [
      // { name: "Getting started", link: "/getting-started" },
      { name: "Package", link: "/package" },
      { name: "FAQ", link: "/faq" },
      { name: "Referral", link: "/referral" },
    ],
  },
];

const Footer = () => {
  return (
    // <Box>OI</Box>
    <Box
      component="footer"
      sx={{
        backgroundColor: "#161d2f",
        padding: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        color: "white",
        flexWrap: "wrap",
        maxHeight: "250px",
      }}
    >
      <img
        src="/logo.png"
        alt="Logo"
        style={{ maxHeight: 50, marginRight: 16 }}
      />
      {footerLinks.map((section) => (
        <Box key={section.title} sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
            {section.title}
          </Typography>
          {section.links.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "light.main",
                  mb: 1,
                  "&:hover": {
                    color: "#4caf50",
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </Box>
      ))}
      <Box sx={{ flex: 1, minWidth: 200 }}>
        <Typography variant="h6" sx={{ mb: 2, color: "white" }}>
          SUBSCRIBE
        </Typography>
        <Box sx={{ display: "flex", mb: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter email address"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              flex: 1,
              marginRight: 1,
            }}
          />
          <Button
            variant="contained"
            sx={{ backgroundColor: "#ff5722", color: "white" }}
          >
            SEND
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="body2">Facebook</Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="body2">Twitter</Typography>
          </Link>
          <Link to="#" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="body2">LinkedIn</Typography>
          </Link>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: 4, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          © 2024 All rights reserved by Brewed in chaos Sdn Bhd.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
