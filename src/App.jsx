import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Homepage from "./pages/Homepage";
import axios from "axios";
import TopStocks from "./pages/TopStocks";
import StockPage from "./pages/StockPage";

axios.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      apikey: process.env.REACT_APP_API_KEY,
    };
    return config;
  },
  (error) => Promise.reject(error)
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/top-stocks" element={<TopStocks />} />
        <Route path="/stocks/:id" element={<StockPage />} />
      </Route>
    </Routes>
  );
};

export default App;