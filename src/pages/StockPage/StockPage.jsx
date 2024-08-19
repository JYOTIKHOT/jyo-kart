import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStockQuote, getQuoteData } from "../../store/stockData";
import { useParams } from "react-router-dom";

export default function StockPage() {
  const dispatch = useDispatch();
  const quoteData = useSelector(getQuoteData);

  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchStockQuote(id));
  }, [dispatch, id]);
  return (
    <Box className="page">
      <Typography>{quoteData["01. symbol"]}</Typography>
    </Box>
  );
}
