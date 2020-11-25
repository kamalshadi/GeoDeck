import React from 'react';
import {
  Col, Container, Row, Card, CardBody
} from 'reactstrap';
import MainContainer from '../GeoDeck/Canvas';
import Toolbar from '../GeoDeck/Toolbar';
import Slider from '../../shared/components/range_slider/Slider';
import InfoExport from '../GeoDeck/InfoExport';
import DetailChart from '../GeoDeck/DetailChart';
// import { withTranslation } from 'react-i18next';

const VisDash = () => (
  <div className="geodeck-app">
    <div className="tool-bar">
      <Toolbar />
    </div>
    <div className="geodeck-canvas">
      <div className="chart-container">
        <MainContainer style={{width:'100%'}}/>
      </div>
      <div className="control-bar">
          <Slider min={0} max={129} value={34} />
      </div>
    </div>
    <div className="detail-bar">
      <DetailChart />
      <InfoExport />
    </div>
  </div>
)

// const VisDash = () => (
//   <Container className="dashboard">
//     <Row>
//       <Col md={2}>
//         <Card>
//           <CardBody>
//             <div className="card__title">
//               <h5 className="bold-text">Variable Picker</h5>
//               <h5 className="subhead">Select Variable to Visualize</h5>
//             </div>
//             <div style={{height: '500px'}}>test</div>
//           </CardBody>
//         </Card>
//       </Col>
//       <Col md={7}>
//         <Row>
//           <MainContainer style={{width:'100%'}}/>
//         </Row>
//         <Row>
//           <Card>
//             <CardBody>
//               <div className="card__title">
//                 <h5 className="bold-text">Time</h5>
//                 <h5 className="subhead">set the time for <span className="red-text">data</span></h5>
//               </div>
//               <Slider min={0} max={129} value={34} />
//             </CardBody>
//           </Card>
//         </Row>
//       </Col>
//       <Col md={3}>
//         <Card>
//           <CardBody>
//             <div className="card__title">
//               <h5 className="bold-text">Variable Picker</h5>
//               <h5 className="subhead">Select Variable to Visualize</h5>
//             </div>
//             <div style={{height: '500px'}}>test</div>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// );


export default VisDash;
