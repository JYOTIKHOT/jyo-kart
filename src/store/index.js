import { configureStore } from "@reduxjs/toolkit";
import topStocksReducer from "./topStocksReducer";
import topStockDataReducer from "./stockData";

const store = configureStore({
  reducer: {
    topStocks: topStocksReducer,
    stockData: topStockDataReducer,
  },
});

export default store;
