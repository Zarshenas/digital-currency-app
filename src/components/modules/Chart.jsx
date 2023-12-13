import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { convertChartData } from "../../helpers/ConvertChartData";
import { useState } from "react";

const Chart = ({
  setChart,
  chart,
  chart: {
    coin: { market_cap, current_price, ath, image, id, name },
  },
}) => {
  const [type, setType] = useState("prices");

  const handleType = (event) => {
    if (event.target.tagName === "BUTTON") {
      setType(event.target.innerText.toLowerCase().replace(" ", "_"));
    }
  };
  console.log(convertChartData(chart, type));
  return (
    <div className={"z-10 fixed w-full h-full backdrop-blur-md top-0 left-0"}>
      <button
        onClick={() => setChart(null)}
        className="button-primary bg-red-500 mt-10 ml-10 font-extrabold"
      >
        ✕
      </button>
      <div className="  mx-auto w-3/4 h-5/6 bg-black shadow-lg rounded-md px-16 py-2 bg-clip-padding bg-opacity-60 border border-theme-color ">
        <div className="flex justify-center items-center my-5">
          <img className="w-16 h-16 mr-6" src={image} alt={id} />
          <span className="font-extrabold text-3xl text-theme-color">
            {name}
          </span>
        </div>
        <Graph type={type} graphData={convertChartData(chart, type)} />
        <div className={"my-2 flex justify-center "} onClick={handleType}>
          <button
            className={`${
              type === "prices"
                ? "button-primary"
                : "button-secondary text-theme-color"
            } `}
          >
            Prices
          </button>
          <button
            className={`${
              type === "market_caps"
                ? "button-primary"
                : "button-secondary text-theme-color"
            } `}
          >
            Market Caps
          </button>
          <button
            className={`${
              type === "total_volumes"
                ? "button-primary"
                : "button-secondary text-theme-color"
            } `}
          >
            Total Volumes
          </button>
        </div>
        <div className="flex justify-evenly my-6">
          <p className="text-theme-color font-bold">
            Price :{" "}
            <span className="text-white font-light">{current_price}</span>
          </p>
          <p className="text-theme-color font-bold">
            ATH : <span className="text-white font-light">{ath}</span>
          </p>
          <p className="text-theme-color font-bold">
            Market Cap :{" "}
            <span className="text-white font-light">{market_cap}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chart;

const Graph = ({ graphData, type }) => {
  console.log(graphData);
  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart width={400} height={400} data={graphData}>
        <CartesianGrid strokeDasharray="4 4" />
        <Line
          type={"monotone"}
          dataKey={type}
          strokeWidth={"2px"}
          stroke="#A259FF"
        />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <XAxis dataKey="date" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
