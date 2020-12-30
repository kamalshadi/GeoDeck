import React, { useState } from "react";
import { Input } from "reactstrap";

const SimulationInput = (props) => {
  const { id, name, color, onSelect } = props;
  const [value, setValue] = useState(name);

  const onSelectSimulation = () => {
    onSelect(id);
  };

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="simulation__inputs__child"
      style={{ borderColor: color }}
      onClick={onSelectSimulation}
    />
  );
};

export default SimulationInput;
