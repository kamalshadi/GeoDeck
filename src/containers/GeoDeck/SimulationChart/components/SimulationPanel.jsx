import React, { useState } from "react";
import SimulationLinePoint from "./SimulationLinePoint";
import SimulationVariable from "./SimulationVariable";

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

const SimulationPanel = (props) => {
  const { simulations, currentData, setCurrentData } = props;
  // const [current, setCurrent] = useState({}); // index of simulation

  const onSelectVariable = (id, key) => {
    // setCurrent(index);
    setCurrentData(id, key); // id: id of simulation - key: variable key
  };

  console.log(currentData);

  return (
    <React.Fragment>
      <div className="simulation__plot__panel__variables simulation__inputs">
        {simulations.map((simulation, index) => {
          console.log(simulation);

          return (
            <SimulationVariable
              simulation={simulation}
              key={index}
              onSelectVariable={onSelectVariable}
            />
          );
        })}
      </div>
      <div className="simulation__plot__panel__divider" />
      <div className="simulation__plot__panel__setting">
        <SimulationLinePoint currentData={currentData} />
      </div>
    </React.Fragment>
  );
};

export default SimulationPanel;
