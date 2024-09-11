import { Box, Stack, Grid, Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  clearStockData,
  fetchStockData,
  getAsyncStatus,
  getCompanyProfile,
  getQuoteData,
} from "../../store/stockData";
// import Chart from "../../components/Chart";
import { StockDetails, StockPriceData } from "../../components/StockDataViews";
import SadImage from "../../assets/sad-img.jpg";

export default function StockPage() {
  const dispatch = useDispatch();
  const quoteData = useSelector(getQuoteData);
  const companyProfile = useSelector(getCompanyProfile);
  const status = useSelector(getAsyncStatus);

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStockData(id));
    return () => {
      dispatch(clearStockData());
    };
  }, [dispatch, id]);

  return (
    <Box className="page">
      <Grid container spacing={2}>
        <Grid minHeight="100%" item xs={12} md={8}>
          <Card
            sx={{
              height: "500px",
              minHeight: "100%",
              borderRadius: 4,
              boxShadow: 3,
            }}
            variant="outlined"
          >
            <Stack
              sx={{
                backgroundImage: `url(${SadImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              boxSizing="border-box"
              height={1}
              p={2}
              alignItems="center"
              justifyContent="center"
            >
              <Typography color="white" variant="h6">
                API for graph has gone premium, looking for alternates
              </Typography>
              {/* <Chart stockSymbol={id} /> */}
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={12}>
              <StockPriceData
                loading={status === "loading"}
                companyProfile={companyProfile}
                quoteData={quoteData}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <StockDetails
                loading={status === "loading"}
                companyProfile={companyProfile}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
