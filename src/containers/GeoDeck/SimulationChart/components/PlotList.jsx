import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import PlotCard from "./PlotCard";
import PlotCreate from "./PlotCreate";
import { fetchPlots } from "../../../../redux/actions/plotAction";
import ChartSample from "./ChartSample";
import PlotChart from "./PlotChart";

const plotList = [
  { name: "Plot1", type: "line" },
  { name: "Plot2", type: "scatter" },
];
const PlotList = (props) => {
  const [simulations, setSimulations] = useState([]);
  const { data, currentIds, variableId, pointId, lineId, isPoint } = props;

  useEffect(() => {
    setSimulations(data);
  }, [data]);

  useEffect(() => {
    props.fetchPlots();
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
      <ChartSample />

      {plotList.map((plot, index) => {
        return (
          <PlotCard>
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

export default connect(mapStateToProps, { fetchPlots })(PlotList);
