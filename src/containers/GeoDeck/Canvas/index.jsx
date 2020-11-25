import React, { useState } from 'react';
import {
  Card, CardBody, Col,Button, ButtonGroup, ButtonToolbar
} from 'reactstrap';
import classnames from 'classnames';
import { withTranslation } from 'react-i18next';
import Cube from '../../Three';
import VRScene from '../../Aframe';
import MultipleYAxesScatterChart from '../../Charts/Recharts/components/MultipleYAxesScatterChart';

const MainContainer = () => {
    const [tab, setTab] = useState(0)

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
        <ButtonToolbar>
          <ButtonGroup className="btn-group--icons" dir="ltr">
            <Button outline={tab!==0} onClick={()=>setTab(0)}>2D</Button>
            <Button outline={tab!==1} onClick={()=>setTab(1)}>3D</Button>
            <Button outline={tab!==2} onClick={()=>setTab(2)}>VR</Button>
          </ButtonGroup>
        </ButtonToolbar>
        {renderGraph()}
      </>
    )

}

export default withTranslation('common')(MainContainer);
