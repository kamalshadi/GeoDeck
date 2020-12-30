import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import SimTable from "./components/SimTable";
import SimulationInput from "./components/SimulationInput";
import SimulationNew from "./components/SimulationNew";
import { fetchSimulations } from "../../../redux/actions/simulationAction";
import { connect } from "react-redux";

class SimulationView extends Component {
  state = { currentSimulation: null };

  componentDidMount() {
    this.props.fetchSimulations();
  }

  onSelectSim = (id) => {
    const { simulations } = this.props;
    const currentSimulation = simulations.filter((sim) => sim.id === id);
    this.setState({ currentSimulation });
  };

  render() {
    const { simulations } = this.props;
    const { currentSimulation } = this.state;

    return (
      <Container className="simulation">
        <Row className="simulation__container">
          <Col md="2" className="simulation__sidebar">
            <div className="simulation-inputs">
              {simulations?.map(({ id, name, color }, index) => {
                return (
                  <SimulationInput
                    onSelect={this.onSelectSim}
                    key={index}
                    id={id}
                    name={name}
                    color={color}
                  />
                );
              })}
            </div>
            <SimulationNew />
          </Col>

          <Col md="10" className="simulation__view">
            <h4>API exposed variables</h4>
            {currentSimulation && <SimTable simulation={currentSimulation[0]} />}
          </Col>
        </Row>
      </Container>
    );
  }
}

// export default SimulationView;

const mapStateToProps = (state) => {
  return { simulations: Object.values(state.simulations) };
};

export default connect(mapStateToProps, { fetchSimulations })(SimulationView);
