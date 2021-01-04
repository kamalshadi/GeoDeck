import React, { useState } from "react";
import _ from "lodash";
import { Collapse, Input, InputGroup } from "reactstrap";

const PlotVariable = ({ simulation }) => {
  const perPage = 3;
  const [isOpen, setIsOpen] = useState(false);
  const [offSet, setOffSet] = useState(1);

  const onInputClick = () => {
    setIsOpen(!isOpen);
    setOffSet(1);
  };
  const onChangeOffSet = () => setOffSet(offSet + 1);

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
  const { name, variables } = simulation;
  const visibleVariables = variables.slice(0, offSet * perPage);
  return (
    <div  className="simulation__plot__input">
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
        {visibleVariables.map((variable, index) => {
          return <p key={index}>{variable.name}</p>;
        })}
        {offSet * perPage < _.size(variables) && (
          <p onClick={onChangeOffSet}>More...</p>
        )}
      </Collapse>
    </div>
  );
};

export default PlotVariable;
