import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Layout from "../Layout";

const faqList = [
  {
    code: "What is return policy?",
    desc: "Our return policy allows returns within 30 days of purchase. Please ensure the product is in its original condition.",
  },
  {
    code: "How can I track my order?",
    desc: "You can track your order using the tracking number provided in your order confirmation email.",
  },
  {
    code: "Do we offer international shipping?",
    desc: "Yes, we offer international shipping to many countries. Please see our shipping policy for more details.",
  },
  {
    code: "How do I make a payment?",
    desc: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers.",
  },
  {
    code: "Can I change or cancel my order?",
    desc: "You can change or cancel your order within 24 hours of placing it. After that, the order processing begins, and changes may not be possible.",
  },
  {
    code: "What is your warranty policy?",
    desc: "We offer a one-year warranty on all our products. The warranty covers manufacturing defects and excludes any damage caused by misuse.",
  },
  {
    code: "How can I contact customer service?",
    desc: "You can reach our customer service team via email at support@example.com or by calling (+081) 5678 1234.",
  },
  {
    code: "Are there any discounts available?",
    desc: "Yes, we offer seasonal discounts and promotions. Subscribe to our newsletter to stay updated on the latest offers.",
  },
  {
    code: "How do I subscribe to your newsletter?",
    desc: "You can subscribe to our newsletter by entering your email address in the subscription box at the bottom of our website.",
  },
  {
    code: "What is your privacy policy?",
    desc: "Our privacy policy outlines how we collect, use, and protect your personal information. Please read it carefully to understand our practices.",
  },
];

const FaqPage = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "light.main",
          padding: 4,
          minHeight: "100vh",
        }}
      >
        <Box sx={{ maxWidth: 800, margin: "auto", textAlign: "center" }}>
          <Typography variant="h4" gutterBottom fontWeight="bold">
            FAQ
          </Typography>

          {faqList.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: "secondary.main",
                border: "1px solid #444",
                marginBottom: 2,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "primary.main" }} />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography variant="h6" sx={{ flexShrink: 0 }}>
                  {faq.code}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" textAlign="left">
                  {faq.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

export default FaqPage;
