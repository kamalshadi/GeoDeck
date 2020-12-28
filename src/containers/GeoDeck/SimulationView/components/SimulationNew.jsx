import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const SimulationNew = () => {
  const addNewSimulation = () => {
    console.log("create new simulation");
  };
  return (
    <div className="simulation__new">
      <PlusOutlined
        className="simulation__new__icon"
        onClick={addNewSimulation}
      />
    </div>
  );
};

export default SimulationNew;
