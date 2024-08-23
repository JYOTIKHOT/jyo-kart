import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.REACT_APP_FIN_API_BASE_URL || "";

export const fetchStockQuote = createAsyncThunk(
  "stockData/fetchQuote",
  async (symbol) => {
    try {
      const url = new URL(`${baseURL}/quote`);
      url.searchParams.append("symbol", symbol);
      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchCompanyProfile = createAsyncThunk(
  "stockData/fetchCompanyProfile",
  async (symbol) => {
    try {
      const url = new URL(`${baseURL}/stock/profile2`);
      url.searchParams.append("symbol", symbol);
      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchHistoricalData = createAsyncThunk(
  "stockData/fetchHistoricalData",
  async ({ stockSymbol, resolution, from, to }) => {
    try {
      const searchParams = new URLSearchParams([
        ["symbol", stockSymbol],
        ["resolution", resolution],
        ["from", from],
        ["to", to],
      ]);
      const url = new URL(`${baseURL}/stock/candle`);
      url.search = searchParams.toString();
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
    companyProfile: {},
    historicalData: {},
  },
  reducers: {
    clearStockData(state) {
      state.quoteData = {};
      state.companyProfile = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockQuote.fulfilled, (state, action) => {
        state.quoteData = action.payload;
      })
      .addCase(fetchCompanyProfile.fulfilled, (state, action) => {
        state.companyProfile = action.payload;
      })
      .addCase(fetchHistoricalData.fulfilled, (state, action) => {
        state.historicalData = action.payload;
      });
  },
});

// Actions
export const { clearStockData } = stockDataSlice.actions;

// Selectors
export const getQuoteData = (state) => state.stockData.quoteData;
export const getCompanyProfile = (state) => state.stockData.companyProfile;
export const getHistoricalData = (state) => state.stockData.historicalData;

export default stockDataSlice.reducer;
