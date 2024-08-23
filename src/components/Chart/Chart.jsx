import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  createDate,
  dateToUnixTimeStamp,
  unixTimeStampToDate,
} from "../../helper/dateHelper";
import { useEffect, useState } from "react";
import { chartConfig } from "../../constants/configs";
import { fetchHistoricalData, getHistoricalData } from "../../store/stockData";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

export default function Chart({ stockSymbol }) {
  const [filter, setFilter] = useState("1W");
  const data = useSelector(
    createSelector(getHistoricalData, (state) => {
      return state.c?.map((item, index) => {
        return {
          value: item.toFixed(2),
          date: unixTimeStampToDate(data.t[index]),
        };
      });
    })
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = dateToUnixTimeStamp(startDate);
      const endTimestampUnix = dateToUnixTimeStamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };

    const { startTimestampUnix, endTimestampUnix } = getDateRange();
    const resolution = chartConfig[filter].resolution;
    dispatch(
      fetchHistoricalData({
        stockSymbol,
        resolution,
        from: startTimestampUnix,
        to: endTimestampUnix,
      })
    );
  }, [stockSymbol, filter, dispatch]);

  return (
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={"rgb(199 210 254)"}
              stopOpacity={0.8}
            />
            <stop offset="95%" stopColor={"rgb(199 210 254)"} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#312e81"
          fill="url(#chartColor)"
          fillOpacity={1}
          strokeWidth={0.5}
        />
        <XAxis dataKey="date" />
        <YAxis domain={["dataMin", "dataMax"]} />
      </AreaChart>
    </ResponsiveContainer>
  );
}
