import React from "react";
import { Col, Container, Row } from "reactstrap";
import PlotList from "./components/PlotList";

const SimulationChart = (props) => {
  const { controlBar } = props;

  return (
    <Container className="simulation">
      <Row className="simulation__container">
        <Col md="2" className="simulation__sidebar">
          <fiv>side bar</fiv>
        </Col>

        <Col md="10" className="simulation__plot">
          <PlotList controlBar={controlBar} />
        </Col>
      </Row>
    </Container>
  );
};

export default SimulationChart;
