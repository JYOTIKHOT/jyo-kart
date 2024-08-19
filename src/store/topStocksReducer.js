import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchTopStocks = createAsyncThunk(
  "topStocks/fetchTopStocks",
  async () => {
    try {
      const url = new URL(baseURL);
      url.searchParams.append("function", "TOP_GAINERS_LOSERS");
      const response = await axios.get(url.toString());
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const topStocksSlice = createSlice({
  name: "topStocks",
  initialState: {
    topGainers: [],
    topLosers: [],
    topTraded: [],
    status: "idle",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTopStocks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopStocks.fulfilled, (state, { payload }) => {
        state.topGainers = payload.top_gainers;
        state.topLosers = payload.top_losers;
        state.topTraded = payload.most_actively_traded;
      });
  },
});

export const getTopStockData = (state) => state.topStocks;

export default topStocksSlice.reducer;
