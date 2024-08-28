import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.REACT_APP_FIN_API_BASE_URL || "";

export const fetchStockData = createAsyncThunk(
  "stockData/fetchStockData",
  async (symbol) => {
    try {
      console.log("action called");
      const quoteUrl = new URL(`${baseURL}/quote`);
      quoteUrl.searchParams.append("symbol", symbol);
      const profileUrl = new URL(`${baseURL}/stock/profile2`);
      profileUrl.searchParams.append("symbol", symbol);
      const responses = await Promise.all(
        [quoteUrl, profileUrl].map((url) => axios.get(url.toString()))
      );
      console.log("responses", responses);
      return responses;
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
    data: {
      quoteData: {},
      companyProfile: {},
      historicalData: {},
    },
    status: "idle",
    error: null,
  },
  reducers: {
    clearStockData(state) {
      state.data.quoteData = {};
      state.data.companyProfile = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockData.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(fetchStockData.fulfilled, (state, { payload }) => {
        const [quoteData, companyProfile] = payload;
        state.data.quoteData = quoteData.data;
        state.data.companyProfile = companyProfile.data;
        state.status = "fulfilled";
      })
      .addCase(fetchStockData.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      });
  },
});

// Actions
export const { clearStockData } = stockDataSlice.actions;

// Selectors
export const getQuoteData = (state) => state.stockData.data?.quoteData;
export const getCompanyProfile = (state) =>
  state.stockData.data?.companyProfile;
export const getHistoricalData = (state) =>
  state.stockData.data?.historicalData;
export const getAsyncStatus = (state) => state.stockData.status;

export default stockDataSlice.reducer;
