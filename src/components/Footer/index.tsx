import { Link, useNavigate } from "react-router-dom";
import { Box, Typography, TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const footerLinks = [
  {
    title: "sitemap",
    links: [
      { name: "about_us", link: "/about-us" },
      { name: "package", link: "/package" },
      { name: "rewards", link: "/rewards" },
      { name: "blog", link: "/blog" },
    ],
  },
  {
    title: "help",
    links: [
      { name: "recycling_directory", link: "/recycling-directory" },
      { name: "faq", link: "/faq" },
      { name: "referral", link: "/referral" },
      { name: "terms_and_conditions", link: "/terms-and-conditions" },
    ],
  },
];

const Footer = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", flexGrow: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {footerLinks.map((section, index) => (
              <Box
                key={index}
                sx={{ flex: 1, minWidth: 200, alignItems: "strat" }}
              >
                <Typography variant="h6" sx={{ mt: 2, color: "white" }}>
                  {t(section.title)}
                </Typography>
                {section.links.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "light.main",
                        mb: 1,
                        "&:hover": {
                          color: "success.main",
                        },
                      }}
                    >
                      {t(item.name)}
                    </Typography>
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
          <Box sx={{ flex: 1, minWidth: 200, maxWidth: 400, mt: 2 }}>
            <Typography
              variant="h6"
              sx={{ color: "white", textDecoration: "uppercase" }}
            >
              {t("subscribe")}
            </Typography>
            <Box sx={{ display: "flex", mb: 2 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder={t("enter_email_address")}
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  flex: 1,
                  mr: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#ff5722",
                  color: "white",
                  textDecoration: "uppercase",
                }}
              >
                {t("send")}
              </Button>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body2" color="light.main">
                  {t("facebook")}
                </Typography>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body2" color="light.main">
                  {t("twitter")}
                </Typography>
              </Link>
              <Link to="#" style={{ textDecoration: "none", color: "white" }}>
                <Typography variant="body2" color="light.main">
                  {t("linkedin")}
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", mt: 4, textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          {t("all_rights_reserved")}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
