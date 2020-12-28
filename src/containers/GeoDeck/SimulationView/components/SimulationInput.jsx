import React, { useState } from "react";
import { Input } from "reactstrap";

const SimulationInput = ({ name, color }) => {
  const [value, setValue] = useState(name);
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="simulation-inputs__child"
      style={{ borderColor: color }}
    />
  );
};

export default SimulationInput;
