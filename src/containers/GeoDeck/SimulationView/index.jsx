import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SimulationInput from "./components/SimulationInput";
import SimulationNew from "./components/SimulationNew";

const simulationButtons = [
  { name: "Simulation 1", color: "#1f8705" },
  { name: "Simulation 2", color: "#1f8705" },
  { name: "Simulation 3", color: "#1f8705" },
];

class SimulationView extends Component {
  render() {
    return (
      <Container className="simulation">
        <Row className="simulation__container">

          <Col md="2" className="simulation__sidebar">
            <div className="simulation-inputs">
              {simulationButtons.map(({ name, color }, index) => {
                return <SimulationInput key={index} name={name} color={color} />;
              })}
            </div>
            <SimulationNew />
          </Col>

          <Col md="10" className="simulation__view">
            <h4>API exposed variables</h4>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SimulationView;
