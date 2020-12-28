import React from "react";
import { Table } from "reactstrap";

const SimTable = ({ simulation }) => {
  console.log(simulation);
  const { parameters } = simulation;
  // { label, value, unit, max, min, editable, other }
  return (
    <div className="simulation__table">
      <div className="simulation__table__head">
        <div>Variables</div>
        <div>Current Values</div>
        <div>Uint</div>
        <div>Max</div>
        <div>Min</div>
        <div>Editable</div>
        <div>etc.</div>
      </div>
      {parameters.map(
        ({ label, value, unit, max, min, editable, other }, index) => {
          return (
            <div className="simulation__table__row" key={index}>
              <td>{label}</td>
              <td>{value}</td>
              <td>{unit}</td>
              <td>{max}</td>
              <td>{min}</td>
              <td>{editable}</td>
              <td>{other}</td>
            </div>
          );
        }
      )}
    </div>
  );
};

export default SimTable;
