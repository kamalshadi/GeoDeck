import React, { PureComponent, useEffect, useState } from "react";
import _ from "lodash";
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
  const { plot } = props;

  const { simulations } = plot;

  if (_.isEmpty(simulations)) {
    return null;
  }

  const {
    data,
    currentIds,
    variableId,
    pointId,
    lineId,
    isPoint,
  } = simulations;

  const selectedSimulations = data.filter((sim) =>
    _.includes(currentIds, sim.id)
  );

  const backgroundColor = [
    "#FF6384",
    "#4BC0C0",
    "#FFCE56",
    "#E7E9ED",
    "#36A2EB",
  ];

  let variableName = "variable";
  const dataList = selectedSimulations.map((simulation, index) => {
    const name = simulation.name;
    const variable = simulation?.data.find(
      (variable) => variable.id === variableId
    );
    const pointLine = isPoint
      ? variable?.points.find((point) => point.id === pointId)
      : variable?.lines.find((line) => line.id === lineId);

    const rawData = pointLine?.data;
    const xYData = pointLine?.data.map((data, index) => {
      return { x: index, y: data };
    });

    let color = "";
    if (index < 5) {
      color = backgroundColor[index];
    } else {
      let rColor = Math.floor(Math.random() * 16777215).toString(16);
      color = `#${rColor}`;
    }

    variableName = variable.name;

    return { name, xYData: xYData, rawData, color };
  });

  console.log(dataList);

  const renderChart = () => {
    switch (plot.type) {
      case "line":
        return <ChartLine dataList={dataList} variableName={variableName} />;
      case "scatter":
        return (
          // <div className="simulation__plot__chart" style={{ height: 400 }}>
          <ChartScatter dataList={dataList} variableName={variableName} />
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
