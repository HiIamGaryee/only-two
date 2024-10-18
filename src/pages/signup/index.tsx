import React from "react";
import { Box, Button, TextField, Link, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { SignUpParams, postSignUp } from "../../api"; // Adjust the path as necessary
import loginBg from "../../assets/login-bg.jpg";
import { useAppMutation } from "../../hooks/useAppMutation";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    email: Yup.string().required(t("email_required")).email(t("invalid_email")),
    password: Yup.string().required(t("password_required")),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), undefined], t("passwords_must_match"))
      .required(t("password_confirmation_required")),
    mobile_no: Yup.string().required(t("mobile_number_required")),
    mobile_prefix_no: Yup.string().required(t("mobile_prefix_required")),
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpParams>({
    resolver: yupResolver(validationSchema),
  });

  const { mutate } = useAppMutation(postSignUp);

  const onSubmit = (data: SignUpParams) => {
    mutate(data);
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
      }}
    >
      <Paper
        sx={{
          minWidth: "300px",
          bgcolor: "light.main",
          p: "20px",
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
            <Typography variant="h5">{t("sign_up")}</Typography>
            <Typography variant="body2">{t("welcome_desc")}</Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email")}
            placeholder={t("email_placeholder")}
            type="email"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ""}
            variant="outlined"
            sx={{ mb: 2, background: "#fff" }}
          />

          <TextField
            {...register("password")}
            placeholder={t("password_placeholder")}
            type="password"
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password ? errors.password.message : ""}
            variant="outlined"
            sx={{ mb: 1, background: "#fff" }}
          />

          <TextField
            {...register("password_confirmation")}
            placeholder={t("confirm_password_placeholder")}
            type="password"
            fullWidth
            error={Boolean(errors.password_confirmation)}
            helperText={
              errors.password_confirmation
                ? errors.password_confirmation.message
                : ""
            }
            variant="outlined"
            sx={{ mb: 1, background: "#fff" }}
          />

          <TextField
            {...register("mobile_prefix_no")}
            placeholder={t("mobile_prefix_placeholder")}
            fullWidth
            error={Boolean(errors.mobile_prefix_no)}
            helperText={
              errors.mobile_prefix_no ? errors.mobile_prefix_no.message : ""
            }
            variant="outlined"
            sx={{ mb: 1, background: "#fff" }}
          />

          <TextField
            {...register("mobile_no")}
            placeholder={t("mobile_number_placeholder")}
            fullWidth
            error={Boolean(errors.mobile_no)}
            helperText={errors.mobile_no ? errors.mobile_no.message : ""}
            variant="outlined"
            sx={{ mb: 1, background: "#fff" }}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" sx={{ mt: 2 }} type="submit">
              {t("sign_up")}
            </Button>
          </Box>
          <Box mt={2}>
            <Link href="/login" underline="hover" sx={{ color: "#000" }}>
              {t("already_have_account")}
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
