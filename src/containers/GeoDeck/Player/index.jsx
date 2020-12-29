import React, { useState, useRef, useEffect } from 'react';
import {
  StepBackwardOutlined,
  FastBackwardOutlined,
  CaretRightOutlined,
  FastForwardOutlined,
  StepForwardOutlined,
  CameraOutlined,
} from '@ant-design/icons'
import { connect } from 'react-redux'
import Slider from '../../../shared/components/range_slider/Slider'
import { changeSample } from '../../../redux/actions'


const Player = ({three, changeSample}) => {
  const frame = useRef(null)
  useEffect(()=>{
    frame.current.onchange = (e) => {
      changeSample({
        ...three.sample,
        time: parseInt(e.target.value)
      })
    }
  },[])

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
          <input type="number" defaultValue={5} ref={frame}/>
        </div>
        <CameraOutlined style={{ fontSize: "18px"} } />
      </div>
      <div className="player-slider">
        <Slider min={0} max={30} value={three.sample.time} />
      </div>
    </div>
  )
}


function mapStateToProps({
  three
  }) {
  return {
    three: three
  }
}
const mapDispatchToProps = {
  changeSample
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
