import React from "react";
import _ from "lodash";
import PlotCard from "./PlotCard";
import PlotCreate from "./PlotCreate";
import ChartSample from "./ChartSample";
import PlotChart from "./PlotChart";
import ChartSampleScatter from "./ChartSampleScatter";

const PlotList = (props) => {
  console.log(props);
  const { plots, selectedPlot, setSelectedPlot } = props;

  if (!plots) {
    return null;
  }

  return (
    <div className="simulation__plot__cards" style={{ maxHeight: "1vh" }}>
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
            <PlotChart plot={plot} key={index} />
          </PlotCard>
        );
      })}

      <PlotCreate setSelectedPlot={setSelectedPlot} />
    </div>
  );
};

export default PlotList;
