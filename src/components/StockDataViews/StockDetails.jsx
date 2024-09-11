import { Card, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import SkeletonWrapper from "../SkeletonWrapper";

function StockDetails({ companyProfile, loading }) {
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
        {Object.keys(detailsList).map((detailKey, i) => (
          <Stack
            key={detailKey}
            spacing={2}
            justifyContent="space-between"
            flexWrap="nowrap"
            direction="row"
          >
            <SkeletonWrapper
              loading={loading}
              width={`${50 + i * 5}px`}
              height="24px"
            >
              <Typography variant="body2">{detailsList[detailKey]}</Typography>
            </SkeletonWrapper>
            <SkeletonWrapper
              loading={loading}
              width={`${50 + i * 5}px`}
              height="24px"
            >
              <Typography
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
                variant="body2"
              >
                {detailKey === "marketCapitalization"
                  ? `$${convertMillionToBillion(companyProfile[detailKey])}B`
                  : companyProfile[detailKey] || "NA"}
              </Typography>
            </SkeletonWrapper>
          </Stack>
        ))}
      </Stack>
    </Card>
  );
}

export default StockDetails;
