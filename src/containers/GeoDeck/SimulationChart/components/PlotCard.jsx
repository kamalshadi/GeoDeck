import React from "react";

const PlotCard = (props) => {
  const { plot, simulations, variableId, pointId, lineId, isPoint } = props;

  return (
    <div className="simulation__plot__card">
      <p>{`${plot.name} Export`}</p>
      {/* <div className="simulation__plot__chart">React charts: {plot.type}</div> */}
      <div className="simulation__plot__chart">
        <img height="250px" src={`${process.env.PUBLIC_URL}/img/co2.png`} />
      </div>

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
            {pointLine?.data.map((pl, index) => (
              <div key={index}>{pl}</div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default PlotCard;
