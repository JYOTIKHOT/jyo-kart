import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { Button, Stack } from "@mui/material";
import StockSearch from "../StockSearch";
import { useDispatch, useSelector } from "react-redux";
import { isAuthenticatedSelector, logout } from "../../store/userReducer";

export default function Header() {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "64px" }}>
      <AppBar position="fixed" color="inherit">
        <Stack
          direction="row"
          boxSizing="border-box"
          width={1}
          alignItems="center"
          justifyContent="space-between"
          p={2}
        >
          <Box component={Link} to="/">
            <img src={logo} alt="logo" width="80px" />
          </Box>
          <Box width="40%">
            <StockSearch />
          </Box>
          <Box>
            <Button
              onClick={() => {
                if (!isAuthenticated) {
                  navigate('/login');
                  return
                }
                dispatch(logout());
              }}
              variant="contained"
              style={{ textTransform: "none" }}
            >
              {isAuthenticated ? 'Logout' : 'Login'}
            </Button>
          </Box>
        </Stack>
      </AppBar>
    </Box>
  );
}
