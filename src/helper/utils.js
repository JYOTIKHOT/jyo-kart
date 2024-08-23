import axios from "axios";
import { debounce } from "lodash";

export const debouncedStockSearch = debounce((query, setOptions) => {
  if (!query) return;
  const url = new URL(`${process.env.REACT_APP_FIN_API_BASE_URL}/search`);
  url.searchParams.append("q", query);
  axios
    .get(url.toString())
    .then((res) => res.data.result)
    .then((stocks) => {
      const filteredStocks = stocks.filter(
        (stock) => !stock.symbol?.includes(".")
      );
      setOptions(
        filteredStocks.map((stock) => ({
          value: stock.symbol,
          label: stock.description + " - " + stock.displaySymbol,
        }))
      );
    });
}, 1000);
