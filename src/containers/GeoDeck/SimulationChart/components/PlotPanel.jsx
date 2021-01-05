import React, { useState } from "react";
import PlotData from "./PlotData";
import PlotVariable from "./PlotVariable";

const simulations = [
  {
    name: "simulation1",
    variables: [
      { name: "variable1" },
      { name: "variable2" },
      { name: "variable3" },
      { name: "variable4" },
      { name: "variable5" },
      { name: "variable6" },
      { name: "variable7" },
    ],
  },
  {
    name: "simulation2",
    variables: [
      { name: "variable1" },
      { name: "variable2" },
      { name: "variable3" },
    ],
  },
  {
    name: "simulation3",
    variables: [
      { name: "variable1" },
      { name: "variable2" },
      { name: "variable3" },
    ],
  },
  {
    name: "simulation4",
    variables: [
      { name: "variable1" },
      { name: "variable2" },
      { name: "variable3" },
    ],
  },
];

const PlotPanel = (props) => {

  const[current, setCurrent] = useState({}); // index of simulation

  const onSelectVariable = (index) => {
    setCurrent(index);
  }
  return (
    <React.Fragment>
      <div className="simulation__plot__panel__variables simulation__inputs">
        {simulations.map((simulation, index) => {
          return <PlotVariable simulation={simulation} key={index} onSelectVariable={onSelectVariable}/>;
        })}
      </div>
      <div className="simulation__plot__panel__divider" />
      <div className="simulation__plot__panel__setting">
        <PlotData index={current} />
      </div>
    </React.Fragment>
  );
};

export default PlotPanel;
