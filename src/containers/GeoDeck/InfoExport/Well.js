import React from "react";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";

const theme = {
  textColor: "#929292",
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: "#929292",
        strokeWidth: 1,
      },
    },
    ticks: {
      line: {
        stroke: "#929292",
        strokeWidth: 1,
      },
    },
  },
  grid: {
    line: {
      stroke: "#929292",
      strokeWidth: 0,
    },
  },
};

const data = [
  {
    id: "Well 1",
    data: [
      {
        x: 30,
        y: 30,
      },
    ],
  },
  {
    id: "Well 2",
    data: [
      {
        x: 30,
        y: 120,
      },
    ],
  },
  {
    id: "Well 3",
    data: [
      {
        x: 120,
        y: 30,
      },
    ],
  },
  {
    id: "Well 4",
    data: [
      {
        x: 120,
        y: 120,
      },
    ],
  },
];

export default () => (
  <div style={{ height: "350px" }}>
    <ResponsiveScatterPlot
      data={data}
      theme={theme}
      // margin={{ top: 50, right: 10, bottom: 50, left: 60 }}
      margin={{ top: 40, right: 40, bottom: 40, left: 60 }}
      // margin={{ top: 40, right: 40, bottom: 60, left: 65 }}
      xScale={{ type: "linear", min: 0, max: 150 }}
      xFormat={function (e) {
        return e + " ";
      }}
      yScale={{ type: "linear", min: 0, max: 150 }}
      yFormat={function (e) {
        return e + " ";
      }}
      blendMode={null} //"multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Easting",
        legendPosition: "middle",
        legendOffset: 36,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Northing",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      legends={[]}
    />
  </div>
);
