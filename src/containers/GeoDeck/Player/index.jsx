import React, { useState } from 'react';
import {
  StepBackwardOutlined,
  FastBackwardOutlined,
  CaretRightOutlined,
  FastForwardOutlined,
  StepForwardOutlined,
  CameraOutlined,
} from '@ant-design/icons';
import Slider from '../../../shared/components/range_slider/Slider';


const Player = () => {

  return (
    <div className="time-play">
      <div className="player-buttons">
        <StepBackwardOutlined /><FastBackwardOutlined />
        <CaretRightOutlined />
        <FastForwardOutlined /><StepForwardOutlined />
      </div>
      <div className="player-input">
        <span>Time</span>
        <div className="time-input">
          <input type="number"/>
        </div>
        <CameraOutlined style={{ marginTop: '5px'} } />
      </div>
      <div className="player-slider">
        <Slider min={0} max={129} value={34} />
      </div>
    </div>
  )
}

export default Player;
