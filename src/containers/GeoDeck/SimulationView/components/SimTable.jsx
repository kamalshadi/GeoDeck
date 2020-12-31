import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Button, Input } from "reactstrap";
import { editSimulation } from "../../../../redux/actions/simulationAction";

const columns = [
  { id: "label", label: "Variables", color: "#ff6ce6" },
  { id: "value", label: "Value", color: "#87c1fc" },
  { id: "unit", label: "Unit" },
  { id: "max", label: "Max" },
  { id: "min", label: "Min" },
  { id: "editable", label: "Editable" },
  { id: "other", label: "etc." },
];

const SimTable = ({ simulation, controlBar, editSimulation }) => {
  const { parameters } = simulation;
  const [newParameters, setNewParameters] = useState(parameters);

  // useEffect(() => setNewParameters(parameters), [parameters]);

  const onChangeValue = (value, index) => {
    let intValue = _.toNumber(value);
    const newParam = { ...newParameters[index], value: intValue }; // create new object with changed value
    const newParams = newParameters.map((p, ind) => {
      if (ind === index) return newParam;
      else return p;
    });
    setNewParameters(newParams);
  };

  const onSubmit = () => {
    if (!_.isEqual(parameters, newParameters)) {
      // for demo only
      const newSimulation = {
        ...simulation,
        parameters: newParameters,
        isLoaded: false,
      };
      // after api implementation
      // const newSimulation = { ...simulation, parameters: newParameters };
      editSimulation(newSimulation);
    } else {
      console.log("parameters is equals .....");
    }
  };

  return (
    <React.Fragment>
      <TableContainer
        className="simulation__table"
        style={{ maxHeight: controlBar ? "76vh" : "52vh" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ color: column?.color }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {newParameters.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.id === "value" && simulation.isLoaded ? (
                          <Input
                            className="simulation__table__input"
                            defaultValue={value}
                            type="number"
                            onChange={(e) =>
                              onChangeValue(e.target.value, index)
                            }
                          />
                        ) : (
                          value
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <Button
          color="primary"
          type="button"
          className="simulation__button"
          type="submit"
          onClick={onSubmit}
          disabled={_.isEqual(parameters, newParameters)}
        >
          Regenerate Data
        </Button>
      </div>
    </React.Fragment>
    // <div className="simulation__table">
    //   <div className="simulation__table__head">
    //     <div>Variables</div>
    //     <div>Current Values</div>
    //     <div>Uint</div>
    //     <div>Max</div>
    //     <div>Min</div>
    //     <div>Editable</div>
    //     <div>etc.</div>
    //   </div>
    //   {parameters.map(
    //     ({ label, value, unit, max, min, editable, other }, index) => {
    //       return (
    //         <div className="simulation__table__row" key={index}>
    //           <td>{label}</td>
    //           <td>{value}</td>
    //           <td>{unit}</td>
    //           <td>{max}</td>
    //           <td>{min}</td>
    //           <td>{editable}</td>
    //           <td>{other}</td>
    //         </div>
    //       );
    //     }
    //   )}
    // </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { editSimulation })(SimTable);
