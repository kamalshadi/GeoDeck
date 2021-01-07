import React from "react";
import PlotChart from "./PlotChart";

const PlotCard = (props) => {
  const { plot, simulations, variableId, pointId, lineId, isPoint } = props;

  let name = "";
  const dataArray = simulations.map((simulation) => {
    const variable = simulation?.data.find(
      (variable) => variable.id === variableId
    );
    const pointLine = isPoint
      ? variable?.points.find((point) => point.id === pointId)
      : variable?.lines.find((line) => line.id === lineId);
    const xYData = pointLine?.data.map((data, index) => {
      return { x: index, y: data };
    });

    name = pointLine?.name;

    return xYData;
  });

  console.log(dataArray);

  return (
    <div className="simulation__plot__card">
      {/* <p>{`${plot.name} Export`}</p>
      <div className="simulation__plot__chart">
        <img height="250px" src={`${process.env.PUBLIC_URL}/img/co2.png`} />
      </div> */}

      <div className="simulation__plot__chart">
        {plot.type === "scatter" ? (
          <PlotChart name={name} data={dataArray} />
        ) : (
          <React.Fragment>
            <p>{`${plot.name} Export`}</p>
            <div className="simulation__plot__chart">
              <img
                height="250px"
                src={`${process.env.PUBLIC_URL}/img/co2.png`}
              />
            </div>
          </React.Fragment>
        )}
      </div>

      {/* 
      {simulations.map((simulation) => {
        const variable = simulation?.data.find(
          (variable) => variable.id === variableId
        );
        const pointLine = isPoint
          ? variable?.points.find((point) => point.id === pointId)
          : variable?.lines.find((line) => line.id === lineId);

        return (
          <div>
            <p>{pointLine?.name}</p>
            <PlotChart name={pointLine?.name} data={pointLine?.data} />
          </div>
        );
      })} */}
    </div>
  );
};

export default PlotCard;
