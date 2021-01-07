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

export default class Example extends PureComponent {
  render() {
    const { name, data } = this.props;

    console.log(name);
    console.log(data);
    return (
    //   <ResponsiveContainer>
        <ScatterChart
          width={320}
          height={250}
        //   margin={{
        //     top: 20,
        //     right: 20,
        //     bottom: 20,
        //     left: 20,
        //   }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" />
          <YAxis type="number" dataKey="y" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          {data.map((d) => {
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);

            return <Scatter name={name} data={d} fill={`#${randomColor}`} />;
          })}
        </ScatterChart>
    //   </ResponsiveContainer>
    );
  }
}
