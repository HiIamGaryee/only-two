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
import { useTranslation } from "react-i18next";

const faqList = [
  {
    code: "faq_two",
    desc: "faq_two_desc",
  },
  {
    code: "track_order",
    desc: "track_order_desc",
  },
  {
    code: "international_shipping",
    desc: "international_shipping_desc",
  },
  {
    code: "make_payment",
    desc: "make_payment_desc",
  },
  {
    code: "change_cancel_order",
    desc: "change_cancel_order_desc",
  },
  {
    code: "warranty_policy",
    desc: "warranty_policy_desc",
  },
  {
    code: "contact_customer_service",
    desc: "contact_customer_service_desc",
  },
  {
    code: "available_discounts",
    desc: "available_discounts_desc",
  },
  {
    code: "subscribe_newsletter",
    desc: "subscribe_newsletter_desc",
  },
  {
    code: "privacy_policy",
    desc: "privacy_policy_desc",
  },
];

const FaqPage = () => {
  const { t } = useTranslation();
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
            {t("faq")}
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
                  {t(faq.code)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" textAlign="left">
                  {t(faq.desc)}
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
