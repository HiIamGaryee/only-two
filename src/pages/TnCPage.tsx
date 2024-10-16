import React from "react";
import { Box, Typography, Container } from "@mui/material";
import Layout from "../Layout";

const sections = [
  {
    title: "General Conditions",
    content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.`,
  },
  {
    title: "Intellectual Property",
    content: `The content on this website, including without limitation, the text, software, scripts, graphics, photos, sounds, music, videos, and interactive features and the trademarks, service marks and logos contained therein are owned by or licensed to us and are subject to copyright and other intellectual property rights under national laws and international treaties.`,
  },
  {
    title: "User Obligations",
    content: `You agree to use the website only for purposes that are permitted by (a) the Terms and Conditions and (b) any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions.`,
  },
  {
    title: "Limitation of Liability",
    content: `In no event shall we be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use of or inability to use the service.`,
  },
  {
    title: "Termination",
    content: `We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms and Conditions.`,
  },
];

export const TnCPage = () => {
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
            Terms and Conditions
          </Typography>
          {sections.map((section, index) => (
            <Box key={index} sx={{ marginBottom: 4 }}>
              <Typography variant="h5" fontWeight="bold" sx={{ mb: 1 }}>
                {section.title}
              </Typography>
              <Typography variant="body1">{section.content}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Layout>
  );
};

export default TnCPage;
