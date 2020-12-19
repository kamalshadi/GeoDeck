import React, { useState } from 'react';
import {
  Card, CardBody, Col,Button, ButtonGroup, ButtonToolbar
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import Cube from '../../Three';
import VRScene from '../../Aframe';
import MultipleYAxesScatterChart from '../../Charts/Recharts/components/MultipleYAxesScatterChart'
import jet from './jet.png'

const MainContainer = () => {
    const [tab, setTab] = useState(1)

    const renderGraph = ()=>{
      switch (tab) {
        case 0:
          return <MultipleYAxesScatterChart />
        case 1:
          return <Cube />
        default:
          return <VRScene />
      }
    }
    return (
      <>
        {renderGraph()}
        <div>
          <div>
            <span className={`geo-button ${tab===0?'selected':null}`} onClick={()=>setTab(0)}>ST</span>
            <span className={`geo-button ${tab===1?'selected':null}`} onClick={()=>setTab(1)}>3D</span>
            <span className={`geo-button ${tab===2?'selected':null}`} onClick={()=>setTab(2)}>VR</span>
          </div>
          <div style={{width:"300px"}}>
            <img width="300" src={jet} alt="jet-color-map" />
          </div>
        </div>
      </>
    )

}

export default withTranslation('common')(MainContainer);
