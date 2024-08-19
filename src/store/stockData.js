import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchStockQuote = createAsyncThunk(
  "stockData/fetchQuote",
  async (symbol) => {
    try {
      const url = new URL(baseURL);
      console.log(symbol);
      url.searchParams.append("function", "GLOBAL_QUOTE");
      url.searchParams.append("symbol", symbol);
      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const stockDataSlice = createSlice({
  name: "stockData",
  initialState: {
    quoteData: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStockQuote.fulfilled, (state, action) => {
      state.quoteData = action.payload;
    });
  },
});

export const getQuoteData = (state) => state.stockData.quoteData;

export default stockDataSlice.reducer;
