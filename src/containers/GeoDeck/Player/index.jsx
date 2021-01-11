import React, { useState } from "react";
import {
  StepBackwardOutlined,
  FastBackwardOutlined,
  CaretRightOutlined,
  FastForwardOutlined,
  StepForwardOutlined,
  CameraOutlined,
} from "@ant-design/icons";
import Slider from "../../../shared/components/range_slider/Slider";

const Player = () => {
  return (
    <div className="time-play">
      <div className="player-buttons">
        <StepBackwardOutlined className="geo-icon" />
        <FastBackwardOutlined className="geo-icon" />
        <CaretRightOutlined className="geo-icon" />
        <FastForwardOutlined className="geo-icon" />
        <StepForwardOutlined className="geo-icon" />
      </div>
      <div className="player-input">
        <span>Time</span>
        <div className="time-input">
          <input type="number" />
        </div>
        <CameraOutlined className="geo-icon" />
      </div>
      <div className="player-slider">
        <Slider min={0} max={129} value={34} />
      </div>
    </div>
  );
};

export default Player;
