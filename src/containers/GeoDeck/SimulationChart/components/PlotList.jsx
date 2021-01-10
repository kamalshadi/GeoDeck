import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PlotCard from "./PlotCard";
import PlotCreate from "./PlotCreate";
import { fetchPlotTypes } from "../../../../redux/actions/plotAction";
import ChartSample from "./ChartSample";
import PlotChart from "./PlotChart";
import ChartSampleScatter from "./ChartSampleScatter";

const PlotList = (props) => {
  // console.log(props);
  // const [simulations, setSimulations] = useState([]);
  console.log(props);
  const { plots, currentPlot, selectedPlot, setSelectedPlot } = props;

  if (!plots || _.isEmpty(currentPlot)) {
    return null;
  }

  const { id, name, simulations } = currentPlot;

  if (_.isEmpty(simulations)) {
    return null;
  }

  const {
    data,
    currentIds,
    variableId,
    pointId,
    lineId,
    isPoint,
  } = simulations;
  const selectedSimulations = data.filter((sim) =>
    _.includes(currentIds, sim.id)
  );
  console.log(selectedSimulations);

  return (
    <div className="simulation__plot__cards" style={{ maxHeight: "1vh" }}>
      {/* <ChartSample />
      <ChartSampleScatter /> */}
      <PlotCard number={1} index={-2} disable={true}>
        <ChartSample />
      </PlotCard>
      <PlotCard number={2} index={-1} disable={true}>
        <ChartSampleScatter />
      </PlotCard>
      {plots.map((plot, index) => {
        return (
          <PlotCard
            number={index + 3}
            index={index}
            selectedPlot={selectedPlot}
            setSelectedPlot={setSelectedPlot}
          >
            <PlotChart
              simulations={selectedSimulations}
              variableId={variableId}
              lineId={lineId}
              pointId={pointId}
              isPoint={isPoint}
              plot={plot}
              currentPlot={currentPlot}
              key={index}
            />
          </PlotCard>
        );
      })}

      <PlotCreate setSelectedPlot={setSelectedPlot} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { plots: Object.values(state.plots) };
};

export default connect(mapStateToProps, { fetchPlotTypes, fetchPlotTypes })(
  PlotList
);
