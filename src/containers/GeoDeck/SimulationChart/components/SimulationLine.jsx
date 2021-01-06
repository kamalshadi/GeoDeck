import React from "react";
import TimeFrame from "./TimeFrame";

const SimulationLine = (props) => {
  const { lines } = props;

  const onChangeTime = () => {
    console.log("time changed!");
  };
  return (
    <React.Fragment>
      <div>
        {!!lines &&
          Object.keys(lines).map((point, index) => {
            return <p key={index}>{point}</p>;
          })}
      </div>
      <div className="time-frame">
        <h6 className="time-frame__title" style={{ fontWeight: "bold" }}>
          Time Frame
        </h6>
        <TimeFrame
          title="At"
          color="#2cb808"
          current={10}
          onChangeTime={onChangeTime}
        />
      </div>
    </React.Fragment>
  );
};

export default SimulationLine;
