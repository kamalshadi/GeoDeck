import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { connect } from "react-redux";

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
    country: "1.6k",
    burger: 53,
    burgerColor: "#FFCE56",
  },
  {
    country: "1.7k",
    burger: 100,
    burgerColor: "#FFCE56",
  },
  {
    country: "1.8k",
    burger: 153,
    burgerColor: "#FFCE56",
  },
  {
    country: "1.9k",
    burger: 43,
    burgerColor: "#FFCE56",
  },
  {
    country: "2.0k",
    burger: 11,
    burgerColor: "#FFCE56",
  },
];

const dataT = [
  {
    country: "100",
    burger: 23,
    burgerColor: "#FFCE56",
  },
  {
    country: "110",
    burger: 89,
    burgerColor: "#FFCE56",
  },
  {
    country: "120",
    burger: 93,
    burgerColor: "#FFCE56",
  },
  {
    country: "130",
    burger: 9,
    burgerColor: "#FFCE56",
  },
];

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const Dist = ({ three }) => (
  <div style={{ height: "350px" }}>
    <ResponsiveBar
      data={three.sample.variable === "Temprature" ? dataT : data}
      theme={theme}
      keys={["burger"]}
      indexBy="country"
      margin={{ top: 40, right: 40, bottom: 40, left: 60 }}
      // margin={{ top: 40, right: 40, bottom: 60, left: 65 }}

      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: three.sample.variable || "Pressure",
        legendPosition: "middle",
        legendOffset: 36,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Distribution",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

function mapStateToProps({ three }) {
  return {
    three,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dist);
