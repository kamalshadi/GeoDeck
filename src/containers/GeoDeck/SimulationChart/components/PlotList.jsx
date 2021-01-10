import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PlotCard from "./PlotCard";
import PlotCreate from "./PlotCreate";
import {
  fetchPlotTypes,
} from "../../../../redux/actions/plotAction";
import ChartSample from "./ChartSample";
import PlotChart from "./PlotChart";
import ChartSampleScatter from "./ChartSampleScatter";

const PlotList = (props) => {
  // console.log(props);
  // const [simulations, setSimulations] = useState([]);
  const [plotList, setPlotList] = useState([]);
  const { plots } = props;

  useEffect(() => {
    setPlotList(plots);
  }, [plots]);

  // useEffect(() => {
  //   setPlotList(plots);
  // }, [plots]);

  useEffect(() => {
    props.fetchPlotTypes();
  }, []);

  // const selectedSimulations = simulations.filter((sim) =>
  //   _.includes(currentIds, sim.id)
  // );

  if (!plots) {
    return null;
  }

  return null;
  const {
    data,
    currentIds,
    variableId,
    pointId,
    lineId,
    isPoint,
  } = plots?.simulations;
  const selectedSimulations = data.filter((sim) =>
    _.includes(currentIds, sim.id)
  );

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
      {data.map((plot, index) => {
        return (
          <PlotCard number={index + 3}>
            <PlotChart
            plot= {plot}
              // simulations={}
              // variableId={variableId}
              // pointId={pointId}
              // lineId={lineId}
              // isPoint={isPoint}
              // plot={plot}
              // key={index}
            />
          </PlotCard>
        );
      })}

      <PlotCreate />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { plots: Object.values(state.plots) };
};

export default connect(mapStateToProps, { fetchPlotTypes, fetchPlotTypes })(
  PlotList
);
