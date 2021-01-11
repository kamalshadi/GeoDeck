import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const TimeFrame = ({ title, current, color, onChangeTime }) => {
  const [timeFrame, setTimeFrame] = useState(current);

  useEffect(() => {
    onChangeTime(timeFrame);
  }, [timeFrame]);

  return (
    <div className="time-frame__content">
      <h6 style={{ color, fontWeight:500 }}>{title}:</h6>
      <h6 >{`${timeFrame} sec`}</h6>
      <div className="time-frame__change">
          <CaretUpOutlined onClick={(e) => setTimeFrame(timeFrame + 1)} />
          <CaretDownOutlined  onClick={(e) => setTimeFrame(timeFrame - 1)}/>
      </div>
    </div>
  );
};

export default TimeFrame;