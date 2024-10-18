import React, { useState } from "react";
import {
  Box,
  Button,
  Link,
  Typography,
  TextField,
  Stack,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useAuth } from "../../AuthProvider"; // Use the Auth context here
import loginBg from "../../assets/login-bg.jpg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

interface LoginParams {
  email: string;
  password: string;
}

const Login = () => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required(t("email_required")).email(t("invalid_email")),
    password: Yup.string().required(t("password_required")),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(validationSchema),
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: LoginParams) => {
    try {
      await login(data); // Use the hardcoded login function
      navigate("/member/profile"); // Navigate to the profile page after successful login
      console.log("Login successful");
    } catch (error) {
      console.error("Login failed");
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "contain",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Paper
        sx={{
          minWidth: "300px",
          bgcolor: "light.main",
          padding: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxHeight: 80, marginRight: 16, cursor: "pointer" }}
            onClick={() => navigate(`/`)}
          />
          <Box>
            <Typography variant="h5">{t("sign_in")}</Typography>
            <Typography variant="body2">{t("welcome_desc")}</Typography>
          </Box>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <TextField
              {...register("email")}
              placeholder={t("email_placeholder")}
              type="email"
              fullWidth
              error={Boolean(errors.email)}
              helperText={
                errors.email ? errors.email.message : t("tester_email")
              }
              variant="outlined"
            />
            <TextField
              {...register("password")}
              placeholder={t("password_placeholder")}
              fullWidth
              type="password"
              error={Boolean(errors.password)}
              helperText={
                errors.password ? errors.password.message : t("tester_password")
              }
              variant="outlined"
            />

            <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
              {t("sign_in")}
            </Button>
          </Stack>
          <Box mt={2} sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="/sign-up" underline="hover" sx={{ color: "#000" }}>
              {t("dont_have_account")}
            </Link>
          </Box>
        </form>
      </Paper>
      {showSuccess && (
        <Paper
          elevation={4}
          sx={{
            position: "absolute",
            bottom: 120,
            right: 16,
            padding: 2,
            borderRadius: "8px",
          }}
        >
          👎 {t("login_failed")}
        </Paper>
      )}
    </Box>
  );
};

export default Login;
