import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Col, Container, Row } from "reactstrap";
import PlotList from "./components/PlotList";
import SimulationPanel from "./components/SimulationPanel";
import { fetchPlots } from "../../../redux/actions/plotAction";

const SimulationChart = (props) => {
  const [selectedPlot, setSelectedPlot] = useState(0);
  const [plotList, setPlotList] = useState([]);
  const { plots } = props;

  useEffect(() => {
    setPlotList(plots);
  }, [plots]);

  useEffect(() => {
    props.fetchPlots();
  }, []);

  if (_.isEmpty(plotList)) {
    return null;
  }

  const currentPlot = plotList[selectedPlot];

  return (
    <Container className="simulation">
      <Row className="simulation__container">
        <Col
          md="2"
          className="simulation__sidebar simulation__plot__panel"
          style={{ maxHeight: "calc(100vh - 115px)" }}
          // style={{ maxHeight: controlBar ? "calc(100vh - 115px)" : "66vh" }}
        >
          {currentPlot && <SimulationPanel currentPlot={currentPlot} />}
        </Col>

        <Col md="10" className="simulation__plot">
          <PlotList
            plots={plots}
            selectedPlot={selectedPlot}
            setSelectedPlot={setSelectedPlot}
          />
        </Col>
      </Row>
    </Container>
  );
};

// export default SimulationChart;

const mapStateToProps = (state) => {
  return { plots: Object.values(state.plots) };
};

export default connect(mapStateToProps, { fetchPlots })(SimulationChart);
