import { Card, Stack, Typography } from "@mui/material";

import defaultStockImage from "../../assets/deafult-stock.png";

function StockPriceData({ companyProfile, quoteData }) {
  const getFixed = (num) => {
    if (isNaN(num)) return "NA";
    return num.toFixed(2);
  };
  return (
    <Card variant="outlined" sx={{ borderRadius: 4, boxShadow: 3 }}>
      <Stack padding={2} spacing={2}>
        <img
          width="60px"
          height="60px"
          src={companyProfile.logo || defaultStockImage}
          alt={companyProfile.name}
        />
        <Typography variant="h5" fontWeight={700}>
          {companyProfile.ticker}
        </Typography>
        <Stack direction="row" spacing={3} alignItems="center">
          <Typography variant="h5" fontWeight={700}>
            ${getFixed(quoteData.c)}
          </Typography>
          <Typography
            variant="body1"
            fontWeight={500}
            color={quoteData.d < 0 ? "red" : "green"}
          >
            {getFixed(quoteData.d)} ({Math.abs(getFixed(quoteData.dp))})
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

export default StockPriceData;
