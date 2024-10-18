import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Layout from "../Layout";
import { useTranslation } from "react-i18next";

const sections = [
  {
    code: "sec1",
    title: "general_conditions_title",
    desc: "general_conditions_desc",
  },
  {
    code: "sec2",

    title: "intellectual_property_title",
    desc: "intellectual_property_desc",
  },
  {
    code: "sec3",
    title: "user_obligations_title",
    desc: "user_obligations_desc",
  },
  {
    code: "sec4",
    title: "limitation_of_liability_title",
    desc: "limitation_of_liability_desc",
  },
  { code: "sec5", title: "termination_title", desc: "termination_desc" },
];

const TnCPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Box
          sx={{
            padding: 4,
            bgcolor: "background.paper",
            color: "text.primary",
          }}
        >
          <Typography
            variant="h2"
            align="center"
            fontWeight="bold"
            sx={{ mb: 4 }}
          >
            {t("terms_and_conditions_title")}
          </Typography>
          {sections.map((section, index) => (
            <Box key={index} sx={{ marginBottom: 4 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                {t(section.title)}
              </Typography>
              <Typography variant="body1">{t(section.desc)}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default TnCPage;
