import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, Stack } from "@mui/material";
import Logo from "../../assets/logo-no-background.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticatedSelector, login } from "../../store/userReducer";
import { useEffect } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch(
      login({ username: data.get("username"), password: data.get("password") })
    );
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              width={1}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                size="small"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
            <Link onClick={() => navigate("/register")} variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Stack>
        </Card>
      </Stack>
    </Box>
  );
}
