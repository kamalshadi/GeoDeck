import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PlotCard from "./PlotCard";
import PlotCreate from "./PlotCreate";
import {
  fetchPlots,
  fetchPlotTypes,
} from "../../../../redux/actions/plotAction";
import ChartSample from "./ChartSample";
import PlotChart from "./PlotChart";
import ChartSampleScatter from "./ChartSampleScatter";

const PlotList = (props) => {
  const [simulations, setSimulations] = useState([]);
  const [plotList, setPlotList] = useState([]);
  const {
    plots,
    data,
    currentIds,
    variableId,
    pointId,
    lineId,
    isPoint,
  } = props;

  useEffect(() => {
    setSimulations(data);
  }, [data]);

  useEffect(() => {
    setPlotList(plots);
  }, [plots]);

  useEffect(() => {
    props.fetchPlots();
  }, []);
  useEffect(() => {
    props.fetchPlotTypes();
  }, []);

  const selectedSimulations = simulations.filter((sim) =>
    _.includes(currentIds, sim.id)
  );

  if (!selectedSimulations) {
    return null;
  }
  // console.log(selectedSimulations);

  return (
    <div className="simulation__plot__cards" style={{ maxHeight: "1vh" }}>
      {/* <ChartSample />
      <ChartSampleScatter /> */}
      <PlotCard number={1}>
        <ChartSample />
      </PlotCard>
      <PlotCard number={2}>
        <ChartSampleScatter />
      </PlotCard>
      {plotList.map((plot, index) => {
        return (
          <PlotCard number={index + 3}>
            <PlotChart
              simulations={selectedSimulations}
              variableId={variableId}
              pointId={pointId}
              lineId={lineId}
              isPoint={isPoint}
              plot={plot}
              key={index}
            />
          </PlotCard>
          // <PlotCard
          //   simulations={selectedSimulations}
          //   variableId={variableId}
          //   pointId={pointId}
          //   lineId={lineId}
          //   isPoint={isPoint}
          //   plot={plot}
          //   key={index}
          // />
        );
      })}

      <PlotCreate />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.plots };
};

export default connect(mapStateToProps, { fetchPlots, fetchPlotTypes })(
  PlotList
);
