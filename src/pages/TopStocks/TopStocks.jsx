import { Box, Stack, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { STOCK_TYPES } from "../../components/MiniStocksList/MiniStocksList";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopStocks, getTopStockData } from "../../store/topStocksReducer";
import { useEffect } from "react";
import { isEmpty } from "lodash";

const TITLE_BY_TYPE = {
  topGainers: "Top Gainers",
  topLosers: "Top Losers",
  topTraded: "Most Traded",
};

export default function TopStocks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const handleChange = (_, newValue) => {
    setSearchParams((prevParams) => {
      return { ...prevParams, type: newValue };
    });
  };

  const topStockData = useSelector(getTopStockData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(topStockData[type])) {
      dispatch(fetchTopStocks());
    }
  }, [topStockData, type, dispatch]);
  return (
    <Box className="page">
      <Stack direction="column" spacing={3}>
        <Typography variant="h5" fontWeight={700}>
          {TITLE_BY_TYPE[type] || "Stocks"}
        </Typography>
        <Tabs value={type} onChange={handleChange}>
          <Tab
            label={TITLE_BY_TYPE.topGainers}
            value={STOCK_TYPES.TOP_GAINERS}
          />
          <Tab label={TITLE_BY_TYPE.topLosers} value={STOCK_TYPES.TOP_LOSERS} />
          <Tab label={TITLE_BY_TYPE.topTraded} value={STOCK_TYPES.TOP_TRADED} />
        </Tabs>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Company</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Profit/Loss(today)</TableCell>
                <TableCell align="right">Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(topStockData[type] || []).map((row) => (
                <TableRow
                  key={row.ticker}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ticker}
                  </TableCell>
                  <TableCell align="right">${row.price}</TableCell>
                  <TableCell align="right">
                    <Typography
                      color={row.change_amount.includes("-") ? "red" : "green"}
                    >
                      {row.change_amount}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">{row.volume}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Box>
  );
}
