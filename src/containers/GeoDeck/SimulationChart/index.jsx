import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import PlotList from "./components/PlotList";
import SimulationPanel from "./components/SimulationPanel";
import { fetchPlots } from "../../../redux/actions/plotAction";

const SimulationChart = (props) => {
  const { controlBar, simulations } = props;
  // const [sims, setSims] = useState([]);
  // const [currentData, setCurrentData] = useState([]);

  // useEffect(() => {
  //   props.fetchPlots();
  // }, []);

  // useEffect(() => {
  //   setSims(simulations);
  // }, [simulations]);

  // const onSetCurrentData = (id, dataKey) => {
  //   console.log(`dataKey is: ${dataKey}`);
  //   console.log(`id is: ${id}`);
  //   const selectedSim = sims.find((sim) => sim.id === id);
  //   const data = selectedSim.data[dataKey];
  //   console.log(data);
  //   console.log(sims);
  //   setCurrentData(data);
  // };

  // console.log(sims);

  return (
    <Container className="simulation">
      <Row className="simulation__container">
        <Col
          md="2"
          className="simulation__sidebar simulation__plot__panel"
          style={{ maxHeight: controlBar ? "calc(100vh - 115px)" : "66vh" }}
        >
          <SimulationPanel
            // simulations={sims}
            // setCurrentData={onSetCurrentData}
            // currentData={currentData}
          />
        </Col>

        <Col md="10" className="simulation__plot">
          <PlotList controlBar={controlBar}
          
          // data={currentData} 
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SimulationChart;
// const mapStateToProps = (state) => {
//   return { simulations: Object.values(state.plots?.data) };
// };

// export default connect(mapStateToProps, { fetchPlots })(SimulationChart);
