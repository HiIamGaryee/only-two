import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";

const footerLinks = [
  {
    title: "SITEMAP",
    links: [
      { name: "About us", link: "/about-us" },
      { name: "Package", link: "/package" },
      { name: "Rewards", link: "/rewards" },
      { name: "Blog", link: "/blog" },
    ],
  },
  {
    title: "HELP",
    links: [
      { name: "Recycling Directory", link: "/recycling-directory" },
      { name: "FAQ", link: "/faq" },
      { name: "Referral", link: "/referral" },
      { name: "Terms and Conditions", link: "/terms-and-conditions" },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "dark.main",
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
      <Box
        sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}
      >
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxHeight: 50, marginRight: 16, cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {footerLinks.map((section) => (
              <Box
                key={section.title}
                sx={{ flex: 1, minWidth: 200, alignItems: "strat" }}
              >
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
          </Box>
          <Box sx={{ flex: 1, minWidth: 200, maxWidth: 400 }}>
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
                <Typography variant="body2" color="light.main">
                  Facebook
                </Typography>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body2" color="light.main">
                  Twitter
                </Typography>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body2" color="light.main">
                  LinkedIn
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: 4, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          © 2024 All rights reserved by Go Green Sdn Bhd .
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
