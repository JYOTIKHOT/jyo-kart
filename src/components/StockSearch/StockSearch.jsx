import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useDebouncedStockSearch } from "../../hooks/useDebouncedStockSearch";

function StockSearch() {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const { loading, options } = useDebouncedStockSearch(inputValue);

  const navigate = useNavigate();

  return (
    <Autocomplete
      disableClearable
      loading={loading}
      loadingText="Searching Stocks..."
      onClose={() => setInputValue("")}
      size="small"
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
        setInputValue(newValue ? newValue.label : "");
        navigate(`/stocks/${newValue.value}`);
      }}
      blurOnSelect
      onFocus={() => setInputValue("")}
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => {
        setInputValue(newInputValue);
      }}
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          InputProps={{
            endAdornment: null,
          }}
          {...params}
          label="Search stocks"
        />
      )}
    />
  );
}

export default StockSearch;
