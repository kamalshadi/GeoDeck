import React, { useState } from "react";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import {
  Loading3QuartersOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const SimulationInput = (props) => {
  const { id, name, color, isLoaded, selected, onSelect } = props;
  const [value, setValue] = useState(name);

  const onSelectSimulation = () => {
    onSelect(id);
  };

  return (
    <InputGroup>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`simulation__inputs__child ${selected ? "selected" : ""}`}
        style={{
          background: selected ? color : "transparent",
          borderColor: color,
          paddingRight: !isLoaded ? "24px" : "",
        }}
        onClick={onSelectSimulation}
      />

      {!isLoaded && (
        <div
          className={`simulation__inputs__loading  ${
            selected ? "selected" : ""
          }`}
        >
          <SyncOutlined spin />
        </div>
      )}
    </InputGroup>
  );
};

export default SimulationInput;
