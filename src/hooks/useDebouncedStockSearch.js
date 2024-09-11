import { useEffect, useState } from "react";
import axios from "axios";

export const useDebouncedStockSearch = (query, delay = 1000) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!query) return;
      const url = new URL(`${process.env.REACT_APP_FIN_API_BASE_URL}/search`);
      url.searchParams.append("q", query);
      setLoading(true);
      axios
        .get(url.toString())
        .then((res) => res.data.result)
        .then((stocks) => {
          const filteredStocks = stocks.filter(
            (stock) =>
              stock.type === "Common Stock" && !stock.symbol?.includes(".")
          );
          setOptions(
            filteredStocks.map((stock) => ({
              value: stock.symbol,
              label: `${stock.description} - ${stock.displaySymbol}`,
            }))
          );
        })
        .finally(() => setLoading(false));
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [query, delay]);
  return { options, loading };
};
