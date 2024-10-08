import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchTopStocks,
  getAsyncStatus,
  getTopStockData,
} from "../../store/topStocksReducer";
import MostChangedStocks from "../../components/MiniStocksList";
import { STOCK_TYPES } from "../../components/MiniStocksList/MiniStocksList";
import Loader from "../../components/Loader";

const Homepage = () => {
  const {
    topTraded = [],
    topLosers = [],
    topGainers = [],
  } = useSelector(getTopStockData);
  const status = useSelector(getAsyncStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopStocks());
  }, [dispatch]);
  return (
    <Box className="page">
      {status === 'loading' && <Loader />}
      <Stack direction="column" spacing={4} width="100%" alignItems="center">
        <MostChangedStocks
          stockList={topTraded.slice(0, 5)}
          title="Trending"
          type={STOCK_TYPES.TOP_TRADED}
        />
        <MostChangedStocks
          stockList={topGainers.slice(0, 5)}
          title="Top Gainers"
          type={STOCK_TYPES.TOP_GAINERS}
        />
        <MostChangedStocks
          stockList={topLosers.slice(0, 5)}
          title="Top Losers"
          type={STOCK_TYPES.TOP_LOSERS}
        />
      </Stack>
    </Box>
  );
};

export default Homepage;
