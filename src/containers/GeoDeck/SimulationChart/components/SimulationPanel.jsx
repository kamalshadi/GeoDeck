import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SimulationLinePoint from "./SimulationLinePoint";
import SimulationVariable from "./SimulationVariable";
import { fetchPlots } from "../../../../redux/actions/plotAction";

const SimulationPanel = (props) => {
  const [simulations, setSimulations] = useState([]);
  const { data, currentIds, variableId, pointId, lineId, isPoint } = props;

  useEffect(() => {
    setSimulations(data);
  }, [data]);

  useEffect(() => {
    props.fetchPlots();
  }, []);

  if (!simulations) {
    return null;
  }

  // console.log(simulations);

  const firstId = currentIds[0];
  const currentSimulation = data.find((d) => d.id === firstId);
  console.log(currentSimulation);
  const currentVariable = currentSimulation?.data.find(
    (sim) => sim.id === variableId
  );
  // console.log(currentVariable);
  return (
    <React.Fragment>
      <div className="simulation__plot__panel__variables simulation__inputs">
        {simulations.map((simulation, index) => {
          return (
            <SimulationVariable
              simulation={simulation}
              currentIds={currentIds}
              variableId={variableId}
              key={index}
            />
          );
        })}
      </div>
      <div className="simulation__plot__panel__divider" />
      <div className="simulation__plot__panel__setting">
        <SimulationLinePoint currentVariable={currentVariable} />
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { ...state.plots };
};

export default connect(mapStateToProps, { fetchPlots })(SimulationPanel);
