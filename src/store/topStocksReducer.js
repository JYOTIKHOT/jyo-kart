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
    data: {
      topGainers: [],
      topLosers: [],
      topTraded: [],
    },
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTopStocks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTopStocks.fulfilled, (state, { payload }) => {
        state.data.topGainers = payload.top_gainers;
        state.data.topLosers = payload.top_losers;
        state.data.topTraded = payload.most_actively_traded;
        state.status = "fulfilled";
      })
      .addCase(fetchTopStocks.rejected, (state, { payload }) => {
        state.error = payload;
        state.status = "error";
      });
  },
});

export const getTopStockData = (state) => state.topStocks.data;
export const getAsyncStatus = (state) => state.topStocks.status;

export default topStocksSlice.reducer;
