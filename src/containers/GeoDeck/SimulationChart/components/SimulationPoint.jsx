import React from "react";
import TimeFrame from "./TimeFrame";
import { editPlot } from "../../../../redux/actions/plotAction";
import { connect } from "react-redux";

const SimulationPoint = (props) => {
  const { points, pointId } = props;

  const onChangePoint = (newId) => {
    if (newId !== pointId) {
      const editObject = { pointId: newId };
      props.editPlot(editObject);
    }
  };
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
          points.map(({ id, name }) => {
            return (
              <p
                key={id}
                onClick={() => onChangePoint(id)}
                className={id === pointId ? "selected" : ""}
              >
                {name}
              </p>
            );
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

export default connect(null, { editPlot })(SimulationPoint);