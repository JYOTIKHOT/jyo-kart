import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "64px" }}>
      <AppBar position="fixed">
        <Toolbar sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Jyo Stocks
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            JS
          </Typography>
          <IconButton
            sx={{ justifySelf: "flex-end" }}
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
