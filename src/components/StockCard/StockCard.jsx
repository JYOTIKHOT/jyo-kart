import { Card, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function StockCard({ ticker, price, changeAmount, changePercentage }) {
  const changeAmountColor = changeAmount.includes("-") ? "red" : "green";
  return (
    <Card
      component={Link}
      to={`/stocks/${ticker}`}
      underline="none"
      sx={{
        width: "180px",
        height: "120px",
        textDecoration: "none",
        boxShadow: 3,
        ":hover": {
          boxShadow: 7,
        },
      }}
      variant="outlined"
    >
      <Stack
        padding={2}
        direction="column"
        justifyContent="space-between"
        boxSizing="border-box"
        height="100%"
      >
        <Typography variant="body1" fontWeight={700}>
          {ticker}
        </Typography>
        <Typography variant="body2" fontWeight={700}>
          ${price}
        </Typography>
        <Stack direction="row" gap={0.5}>
          <Typography variant="body2" color={changeAmountColor}>
            {changeAmount}
          </Typography>
          <Typography variant="body2" color={changeAmountColor}>
            ({changePercentage.replace("-", "")})
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default StockCard;
