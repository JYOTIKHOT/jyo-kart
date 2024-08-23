import { Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";

function StockDetails({ companyProfile }) {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };

  const convertMillionToBillion = (num) => {
    if (isNaN(num)) return "NA";
    return (num / 1000).toFixed(2);
  };
  return (
    <Card variant="outlined" sx={{ borderRadius: 4, boxShadow: 3 }}>
      <Stack
        width={1}
        spacing={1.5}
        divider={<Divider flexItem orientation="horizontal" />}
        p={2}
        boxSizing="border-box"
      >
        {Object.keys(detailsList).map((detailKey) => (
          <Stack key={detailKey} direction="row" justifyContent="space-between">
            <Typography variant="body2">{detailsList[detailKey]}</Typography>
            <Typography variant="body2">
              {detailKey === "marketCapitalization"
                ? `$${convertMillionToBillion(companyProfile[detailKey])}B`
                : companyProfile[detailKey] || "NA"}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

export default StockDetails;
