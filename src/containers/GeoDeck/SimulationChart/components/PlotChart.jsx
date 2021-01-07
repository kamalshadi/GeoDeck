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

const data = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const tooltipColor = {
  color: "#70bbfd",
};

export default class Example extends PureComponent {
  render() {
    const { name, data } = this.props;

    console.log(name);
    console.log(data);
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
