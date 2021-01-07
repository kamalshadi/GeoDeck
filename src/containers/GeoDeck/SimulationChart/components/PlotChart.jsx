import React, { PureComponent } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartLine from "./ChartLine";
import ChartSample from "./ChartSample";
import ChartScatter from "./ChartScatter";

const tooltipColor = {
  color: "#70bbfd",
};

const PlotChart = (props) => {
  const { plot, simulations, variableId, pointId, lineId, isPoint } = props;

  let name = "";
  const dataArray = simulations.map((simulation) => {
    const variable = simulation?.data.find(
      (variable) => variable.id === variableId
    );
    const pointLine = isPoint
      ? variable?.points.find((point) => point.id === pointId)
      : variable?.lines.find((line) => line.id === lineId);
    const xYData = pointLine?.data.map((data, index) => {
      return { x: index, y: data };
    });

    name = pointLine?.name;

    return xYData;
  });

  console.log(dataArray);

  const renderChart = () => {
    switch (plot.type) {
      case "line":
        return <ChartLine />;
      case "scatter":
        return (
          // <div className="simulation__plot__chart" style={{ height: 400 }}>
            <ChartScatter data={dataArray} name={name} />
          // </div>
        );

      default:
        return <ChartSample />;
    }
  };

  return <React.Fragment>{renderChart()}</React.Fragment>;
};

export default PlotChart;

{
  /* <React.Fragment>
  <ResponsiveContainer>
    <ScatterChart
      margin={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <XAxis type="number" dataKey="x" reversed={false} />
      <CartesianGrid strokeDasharray="3 3" />
      <YAxis type="number" dataKey="y" stroke="#70bbfd" />
      <Tooltip itemStyle={tooltipColor} />

      {data.map((d) => {
        let rColor = Math.floor(Math.random() * 16777215).toString(16);
        return <Scatter name={name} data={d} fill={`#${rColor}`} />;
      })}
    </ScatterChart>
  </ResponsiveContainer>
</React.Fragment>; */
}
