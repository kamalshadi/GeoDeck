import React from "react";

const PlotCard = (props) => {
  const { plot } = props;
  return (
    <div className="simulation__plot__card">
      <p>{`${plot.name} Export`}</p>
      {/* <div className="simulation__plot__chart">React charts: {plot.type}</div> */}
      <div className="simulation__plot__chart"><img height="200px" src={`${process.env.PUBLIC_URL}/img/co2.png`} /></div>
    </div>
  );
};

export default PlotCard;
