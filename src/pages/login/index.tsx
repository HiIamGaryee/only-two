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
import { LoginParams, postLogin } from "../../api"; // Adjust the path as necessary
import loginBg from "../../assets/login-bg.jpg";
import { useAppMutation } from "../../hooks/useAppMutation";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginParams>({
    resolver: yupResolver(validationSchema),
  });

  const { mutate } = useAppMutation(postLogin);

  const onSubmit = (data: LoginParams) => {
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
        color: "#fff",
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
            <Typography variant="h5">Sign In</Typography>
            <Typography variant="body2">{t("sign_in_desc")}</Typography>
          </Box>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <TextField
              {...register("email")}
              placeholder="Email address"
              type="email"
              fullWidth
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email.message : ""}
              variant="outlined"
            />
            <TextField
              {...register("password")}
              placeholder="Password"
              fullWidth
              error={Boolean(errors.password)}
              helperText={errors.password ? errors.password.message : ""}
              variant="outlined"
            />

            <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
              Sign In
            </Button>
          </Stack>
          <Box mt={2} sx={{ display: "flex", flexDirection: "column" }}>
            <Link href="#" underline="hover" sx={{ color: "#000" }}>
              Forgot Password
            </Link>
            <Link href="/sign-up" underline="hover" sx={{ color: "#000" }}>
              Don't have an account? Sign up
            </Link>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
