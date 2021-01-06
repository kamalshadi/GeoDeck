import React from "react";
import { Col, Container, Row } from "reactstrap";
import PlotList from "./components/PlotList";
import PlotPanel from "./components/PlotPanel";

const SimulationChart = (props) => {
  const { controlBar } = props;

  return (
    <Container className="simulation">
      <Row className="simulation__container">
        <Col
          md="2"
          className="simulation__sidebar simulation__plot__panel"
          style={{ maxHeight: controlBar ? "calc(100vh - 115px)" : "66vh" }}
        >
          <PlotPanel controlBar={controlBar} />
        </Col>

        <Col md="10" className="simulation__plot">
          <PlotList controlBar={controlBar} />
        </Col>
      </Row>
    </Container>
  );
};

export default SimulationChart;
