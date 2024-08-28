import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      width="100%"
      height="100px"
      padding={2}
      boxSizing="border-box"
      color="#0c0c29d6"
      sx={{ background: "#e6e9ed" }}
    >
      <Stack height={1} justifyContent="center" alignItems="center" width={1}>
        <Typography variant="body2">
          &copy; Copyright 2024 Jyo Stocks, All rights reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
