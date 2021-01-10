import React from "react";
import _ from "lodash";
import ChartLine from "./ChartLine";
import ChartSample from "./ChartSample";
import ChartScatter from "./ChartScatter";

const backgroundColor = ["#FF6384", "#4BC0C0", "#FFCE56", "#E7E9ED", "#36A2EB"];

const PlotChart = (props) => {
  const { plot } = props;

  const { simulations } = plot; // get simulations for each plot

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
  ); // select simulations based on id of active simulations [active simulation set in simulation panel]

  let variableName = "variable"; // label for selected variable
  const dataList = selectedSimulations.map((simulation, index) => {
    const name = simulation.name;
    const variable = simulation?.data.find(
      (variable) => variable.id === variableId
    ); // select active variable
    const pointLine = isPoint
      ? variable?.points.find((point) => point.id === pointId)
      : variable?.lines.find((line) => line.id === lineId); // select active points/lines


    const rawData = pointLine?.data; //initial data
    const xYData = pointLine?.data.map((data, index) => {
      return { x: index, y: data };
    }); // x/y data

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


  const renderChart = () => {
    switch (plot.type) {
      case "line":
        return <ChartLine dataList={dataList} variableName={variableName} />;
      case "scatter":
        return (
          <ChartScatter dataList={dataList} variableName={variableName} />
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
