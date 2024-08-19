import { Box, Typography } from "@mui/material";
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
      <Typography>
        &copy;Copyright 2024 Jyo Street, All rights reserved
      </Typography>
    </Box>
  );
};

export default Footer;
