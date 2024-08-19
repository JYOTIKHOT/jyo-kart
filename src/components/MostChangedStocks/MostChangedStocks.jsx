import { Stack, Typography } from "@mui/material";
import React from "react";
import StockCard from "../StockCard";

function MostChangedStocks({ title, stockList, priceNotDecreased }) {
  return (
    <Stack direction="column" gap={3}>
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {stockList.map(
          ({ price, ticker, change_amount, change_percentage }) => (
            <StockCard
              key={ticker}
              price={price}
              priceNotDecreased={priceNotDecreased}
              ticker={ticker}
              changeAmount={change_amount}
              changePercentage={change_percentage}
            />
          )
        )}
      </Stack>
    </Stack>
  );
}

export default MostChangedStocks;
