import React from "react";

const PlotPoint = (props) => {
  const { points } = props;
  return (
    <React.Fragment>
      <div>
        {Object.keys(points).map((point, index) => {
          return <p key={index}>{point}</p>;
        })}
      </div>
      <div style={{ color: "red" }}>timeFrame</div>
      <div style={{ color: "green" }}>timeFrame</div>
    </React.Fragment>
  );
};

export default PlotPoint;
