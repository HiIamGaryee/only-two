import { Box, Button, TextField, Link, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { SignUpParams, postSignUp } from "../../api"; // Adjust the path as necessary
import loginBg from "../../assets/login-bg.jpg";
import { useAppMutation } from "../../hooks/useAppMutation";
import { useTranslation } from "react-i18next";

const SignUp = () => {
  const { t } = useTranslation();
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Password confirmation is required"),
    mobile_no: Yup.string().required("Mobile number is required"),
    mobile_prefix_no: Yup.string().required("Mobile prefix is required"),
  });

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
          backgroundColor: "light.main",
          padding: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ maxHeight: 80, marginRight: 16 }}
          />
          <Box>
            <Typography variant="h5">Sign Up</Typography>
            <Typography variant="body2">{t("welcome_desc")}</Typography>
          </Box>
        </Box>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("email")}
            placeholder="Email address"
            type="email"
            fullWidth
            error={Boolean(errors.email)}
            helperText={errors.email ? errors.email.message : ""}
            variant="outlined"
            sx={{
              mb: 2,
              background: "#fff",
            }}
          />

          <TextField
            {...register("password")}
            placeholder="Password"
            type="password"
            fullWidth
            error={Boolean(errors.password)}
            helperText={errors.password ? errors.password.message : ""}
            variant="outlined"
            sx={{
              mb: 1,
              background: "#fff",
            }}
          />

          <TextField
            {...register("password_confirmation")}
            placeholder="Confirm Password"
            type="password"
            fullWidth
            error={Boolean(errors.password_confirmation)}
            helperText={
              errors.password_confirmation
                ? errors.password_confirmation.message
                : ""
            }
            variant="outlined"
            sx={{
              mb: 1,
              background: "#fff",
            }}
          />

          <TextField
            {...register("mobile_prefix_no")}
            placeholder="Mobile Prefix"
            fullWidth
            error={Boolean(errors.mobile_prefix_no)}
            helperText={
              errors.mobile_prefix_no ? errors.mobile_prefix_no.message : ""
            }
            variant="outlined"
            sx={{
              mb: 1,
              background: "#fff",
            }}
          />

          <TextField
            {...register("mobile_no")}
            placeholder="Mobile Number"
            fullWidth
            error={Boolean(errors.mobile_no)}
            helperText={errors.mobile_no ? errors.mobile_no.message : ""}
            variant="outlined"
            sx={{
              mb: 1,
              background: "#fff",
            }}
          />

          <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
            Sign Up
          </Button>
          <Box mt={2}>
            <Link href="/login" underline="hover" sx={{ color: "#000" }}>
              Already have an account? Sign in
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default SignUp;
