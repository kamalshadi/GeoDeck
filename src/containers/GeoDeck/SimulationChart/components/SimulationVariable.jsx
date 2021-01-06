import React, { useState } from "react";
import _ from "lodash";
import { Collapse, Input, InputGroup } from "reactstrap";

const SimulationVariable = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [offSet, setOffSet] = useState(1);
  const perPage = 3;

  console.log(props.simulation);
  const { id, name, data } = props.simulation;
  console.log(data);
  const visibleDataKeys =  Object.keys(data).slice(0, offSet * perPage);

  const onInputClick = () => {
    setIsOpen(!isOpen);
    setOffSet(1);
  };

  const onChangeOffSet = () => setOffSet(offSet + 1);

  const onSelectVariable = (dataKey) => {
    // console.log(`dataKey is: ${dataKey}`);
    // console.log(`id is: ${id}`);
    props.onSelectVariable(id,dataKey);
  }
  // {
  //   name: "simulation4",
  //   perPage: 3,
  //   offSet: 1,
  //   variables: [
  //     { name: "variable1" },
  //     { name: "variable2" },
  //     { name: "variable3" },
  //   ],
  // },
  return (
    <div className="simulation__plot__input">
      <InputGroup onClick={onInputClick}>
        <Input
          value={name}
          className={`simulation__inputs__child`}
          style={{
            width: "100%",
            background: "transparent",
            borderColor: "#1f8705",
          }}
          disabled={true}
        />
      </InputGroup>

      <Collapse isOpen={isOpen} className="simulation__plot__collapse">
        {visibleDataKeys.map((dataKey, index) => {
          return (
            <p key={index} onClick={() => onSelectVariable(dataKey)}>
              {dataKey}
            </p>
          );
        })}
        {offSet * perPage < _.size(data) && (
          <p onClick={onChangeOffSet}>More...</p>
        )}
      </Collapse>
    </div>
  );
};

export default SimulationVariable;
