import { Card, Stack, Typography } from "@mui/material";

import defaultStockImage from "../../assets/deafult-stock.png";
import SkeletonWrapper from "../SkeletonWrapper";

function StockPriceData({ companyProfile, quoteData, loading }) {
  const getFixed = (num) => {
    if (isNaN(num)) return "NA";
    return num.toFixed(2);
  };
  return (
    <Card variant="outlined" sx={{ borderRadius: 4, boxShadow: 3 }}>
      <Stack padding={2} spacing={2}>
        <SkeletonWrapper
          loading={loading}
          variant="rounded"
          width="60px"
          height="60px"
        >
          <img
            width="60px"
            height="60px"
            src={!loading ? companyProfile.logo || defaultStockImage : null}
            alt={companyProfile.name}
          />
        </SkeletonWrapper>

        <SkeletonWrapper
          loading={loading}
          height="32px"
          width="80px"
          variant="text"
        >
          <Typography variant="h5" fontWeight={700}>
            {companyProfile.ticker}
          </Typography>
        </SkeletonWrapper>

        <Stack direction="row" spacing={3} alignItems="center">
          <SkeletonWrapper
            loading={loading}
            height="32px"
            width="80px"
            variant="text"
          >
            <Typography variant="h5" fontWeight={700}>
              ${getFixed(quoteData.c)}
            </Typography>
          </SkeletonWrapper>

          <SkeletonWrapper
            loading={loading}
            height="32px"
            width="80px"
            variant="text"
          >
            <Typography
              variant="body1"
              fontWeight={500}
              color={quoteData.d < 0 ? "red" : "green"}
            >
              {getFixed(quoteData.d)} ({Math.abs(getFixed(quoteData.dp))})
            </Typography>
          </SkeletonWrapper>
        </Stack>
      </Stack>
    </Card>
  );
}

export default StockPriceData;
