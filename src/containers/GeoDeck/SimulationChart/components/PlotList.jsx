import React from "react";
import PlotCard from "./PlotCard";
import PlotCreate from "./PlotCreate";

const plotList = [
  { name: "Plot1", type: "desc" },
  { name: "Plot2", type: "linear" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot3", type: "scatter" },
  { name: "Plot4", type: "scatter" },
];
const PlotList = (props) => {
  const { controlBar } = props;
  const height = controlBar ? "83vh" : "65vh";
  return (
    <div className="simulation__plot__cards" style={{ maxHeight: "1vh" }}>
      {plotList.map((plot, index) => {
        return <PlotCard plot={plot} key={index} />;
      })}

      <PlotCreate />
    </div>
  );
};

export default PlotList;
