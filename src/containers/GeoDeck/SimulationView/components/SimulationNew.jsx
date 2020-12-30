import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { createSimulation } from "../../.././../redux/actions/simulationAction";
import { connect } from "react-redux";

const SimulationNew = (props) => {
  const addNewSimulation = () => {
    console.log("create new simulation");
    props.createSimulation();
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

export default connect(null, { createSimulation })(SimulationNew);
