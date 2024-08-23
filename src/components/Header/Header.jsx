import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import logo from "../../assets/logo-no-background.png";
import { Button, Stack } from "@mui/material";
import StockSearch from "../StockSearch";

export default function Header() {
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
              variant="contained"
              style={{ textTransform: "none" }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
          </Box>
        </Stack>
      </AppBar>
    </Box>
  );
}
