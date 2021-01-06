import React from "react";
import TimeFrame from "./TimeFrame";

const PlotPoint = (props) => {
  const { points } = props;

  console.log(points);
  const onChangeStart = () => {
    console.log("Start changed!");
  };
  const onChangeEnd = () => {
    console.log("End changed!");
  };
  return (
    <React.Fragment>
      <div>
        {!!points &&
          Object.keys(points).map((point, index) => {
            return <p key={index}>{point}</p>;
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

export default PlotPoint;
