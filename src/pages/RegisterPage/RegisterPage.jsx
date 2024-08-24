import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, Stack } from "@mui/material";
import Logo from "../../assets/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticatedSelector, register } from "../../store/userReducer";
import { useEffect } from "react";

export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      register({
        username: data.get("username"),
        email: data.get("email"),
        password: data.get("password"),
      })
    );
    navigate("/");
  };
  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated, navigate]);

  return (
    <Box className="page">
      <Stack
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Card
          variant="outlined"
          sx={{ width: "400px", maxWidth: "90%", borderRadius: 3 }}
        >
          <Stack p={3} spacing={3} boxSizing="border-box" alignItems="center">
            <img width="84px" src={Logo} alt="logo" />
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              spacing={2}
            >
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
              />
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
            </Box>
            <Link onClick={() => navigate("/login")} variant="body2">
              {"Already registered? Sign In"}
            </Link>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
