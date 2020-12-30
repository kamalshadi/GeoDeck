import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
const SimTable = ({ simulation }) => {
  console.log(simulation);
  const { parameters } = simulation;
  // { label, value, unit, max, min, editable, other }

  const columns = [
    { id: "label", label: "Variables", color: "#ff6ce6" },
    { id: "value", label: "Current Values", color: "#87c1fc" },
    { id: "unit", label: "Unit" },
    { id: "max", label: "Max" },
    { id: "min", label: "Min" },
    { id: "editable", label: "Editable" },
    { id: "other", label: "etc." },
  ];
  return (
    <TableContainer className="simulation__table" style={{ maxHeight: "52vh" }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{ color: column?.color }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {parameters.map((row, index) => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                {columns.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
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

export default SimTable;
