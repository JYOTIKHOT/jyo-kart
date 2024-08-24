import { configureStore } from "@reduxjs/toolkit";
import topStocksReducer from "./topStocksReducer";
import topStockDataReducer from "./stockData";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    topStocks: topStocksReducer,
    stockData: topStockDataReducer,
    userData: userReducer,
  },
});

export default store;
