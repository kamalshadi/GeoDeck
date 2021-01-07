import React from "react";
import { Col, Container, Row } from "reactstrap";
import PlotList from "./components/PlotList";
import SimulationPanel from "./components/SimulationPanel";

const SimulationChart = (props) => {
  return (
    <Container className="simulation">
      <Row className="simulation__container">
        <Col
          md="2"
          className="simulation__sidebar simulation__plot__panel"
          style={{ maxHeight: "calc(100vh - 115px)" }}
          // style={{ maxHeight: controlBar ? "calc(100vh - 115px)" : "66vh" }}
        >
          <SimulationPanel />
        </Col>

        <Col md="10" className="simulation__plot">
          <PlotList />
        </Col>
      </Row>
    </Container>
  );
};

export default SimulationChart;
