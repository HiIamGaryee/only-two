import React from "react";
import { Typography } from "@mui/material";

import Layout from "../Layout";

export const DirectoryPage = () => {
  return (
    <Layout>
      <Typography variant="h3" align="center" fontWeight="bold" sx={{ mb: 2 }}>
        Recycling Directory
      </Typography>
    </Layout>
  );
};

export default DirectoryPage;
