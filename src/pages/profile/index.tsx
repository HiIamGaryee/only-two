import React from "react";
import { Box, Typography, Paper, Button, Avatar, Stack } from "@mui/material";
import ProfilePicture from "../../assets/profile-avatar.jpg";
import Layout from "../../Layout";
import LanguageSwitcher from "../../components/language";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {t("profile")}
        </Typography>

        <Stack spacing={4}>
          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
            }}
          >
            <Avatar
              src={ProfilePicture}
              sx={{ width: 56, height: 56, mb: 2 }}
            />
            <Box sx={{ borderRadius: 2 }}>
              <Typography variant="h6">Jack Adams</Typography>
              <Typography variant="subtitle1">Product Designer</Typography>
              <Typography variant="body2">
                Los Angeles, California, USA
              </Typography>
            </Box>
          </Paper>

          <Paper sx={{ p: 2, borderRadius: 2 }}>
            <Typography variant="h6">Personal Information</Typography>
            <Typography variant="body2">First Name: Jack</Typography>
            <Typography variant="body2">Last Name: Adams</Typography>
            <Typography variant="body2">Email: jackadams@gmail.com</Typography>
            <Typography variant="body2">Phone: (213) 555-1234</Typography>
            <Typography variant="body2">Bio: Product Designer</Typography>
            <Box sx={{ gap: 2, display: "flex" }}>
              <Button variant="outlined" sx={{ mt: 2 }}>
                Edit
              </Button>
              <LanguageSwitcher />
            </Box>
          </Paper>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Profile;
