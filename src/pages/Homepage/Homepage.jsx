import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import StockCard from "../../components/StockCard";
import MostChangedStocks from "../../components/MostChangedStocks";

const Homepage = () => {
  const [topGainers, setTopGainers] = useState([]);
  const [topLosers, setTopLosers] = useState([]);
  useEffect(() => {
    const url = new URL(process.env.REACT_APP_API_BASE_URL);
    url.pathname += "query";
    url.searchParams.append("function", "TOP_GAINERS_LOSERS");
    axios.get(url.toString()).then((res) => {
      setTopGainers((res.data.top_gainers || []).slice(0, 5));
      setTopLosers((res.data.top_losers || []).slice(0, 5));
    });
  }, []);
  return (
    <Box className="page">
      <Stack direction="column" spacing={4}>
        <MostChangedStocks
          stockList={topGainers}
          priceNotDecreased={true}
          title="Top gainers"
        />
        <MostChangedStocks
          stockList={topLosers}
          priceNotDecreased={false}
          title="Top losers"
        />
      </Stack>
    </Box>
  );
};

export default Homepage;
