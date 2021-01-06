import React from "react";
import TimeFrame from "./TimeFrame";

const SimulationPoint = (props) => {
  const { points } = props;

  // console.log(points);
  const onChangeStart = () => {
    // console.log("Start changed!");
  };
  const onChangeEnd = () => {
    // console.log("End changed!");
  };
  return (
    <React.Fragment>
      <div>
        {!!points &&
          points.map((point) => {
            return <p key={point.id}>{point.name}</p>;
          })}
      </div>
      <div className="time-frame">
        <h6 className="time-frame__title" style={{ fontWeight: "bold" }}>
          Time Span
        </h6>
        <TimeFrame
          title="Start"
          color="#2cb808"
          current={10}
          onChangeTime={onChangeStart}
        />
        <TimeFrame
          title="End"
          color="red"
          current={40}
          onChangeTime={onChangeEnd}
        />
      </div>
    </React.Fragment>
  );
};

export default SimulationPoint;
