import { Stack, Typography } from "@mui/material";
import React from "react";
import StockCard from "../StockCard";
import HyperLink from "../HyperLink";

export const STOCK_TYPES = {
  TOP_TRADED: "topTraded",
  TOP_GAINERS: "topGainers",
  TOP_LOSERS: "topLosers",
};

export default function MiniStocksList({
  title,
  stockList,
  type = STOCK_TYPES.TOP_GAINERS,
}) {
  return (
    <Stack direction="column" gap={3}>
      <Stack
        width="100%"
        direction={{ sm: "row" }}
        justifyContent={{sm: "space-between"}}
        alignItems={{sm: "center"}}
        flexWrap="wrap"
      >
        <Typography variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <HyperLink
          to={`/top-stocks?type=${type}`}
          underline="none"
          fontWeight="bold"
        >
          View more
        </HyperLink>
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap={2}>
        {stockList.map(
          ({ price, ticker, change_amount, change_percentage }) => (
            <StockCard
              key={ticker}
              price={price}
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
