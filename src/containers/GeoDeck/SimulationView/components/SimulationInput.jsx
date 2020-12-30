import React, { useState } from "react";
import { Input } from "reactstrap";

const SimulationInput = (props) => {
  const { id, name, color, selected, onSelect } = props;
  const [value, setValue] = useState(name);

  const onSelectSimulation = () => {
    onSelect(id);
  };

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={`simulation__inputs__child ${selected ? "selected" : ""}`}
      style={
        selected
          ? { background: color, borderColor: color }
          : { borderColor: color }
      }
      onClick={onSelectSimulation}
    />
  );
};

export default SimulationInput;
