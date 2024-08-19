import { Card, Stack, Typography } from "@mui/material";
import React from "react";

function StockCard({
  ticker,
  price,
  changeAmount,
  changePercentage,
  priceNotDecreased,
}) {
  const changeAmountColor = priceNotDecreased ? "green" : "red";
  return (
    <Card sx={{ width: "180px", height: "120px" }} variant="outlined">
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
            ({changePercentage})
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default StockCard;
