import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Polar } from "react-chartjs-2";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

const data = {
  datasets: [
    {
      data: [11, 18, 7, 14],
      backgroundColor: ["#FF6384", "#4BC0C0", "#FFCE56", "#36A2EB"],
      borderColor: "rgba(255,255,255,0.54)",
    },  
  ],
  labels: ["Simulation 1", "Simulation 2", "Simulation 3", "Simulation 4"],
};

const options = {
  // legend: {
  //   position: "bottom",
  // },
  scale: {
    gridLines: {
      color: "rgb(204, 204, 204)",
      borderDash: [3, 3],
    },
    ticks: {
      fontColor: "rgb(204, 204, 204)",
    },
  },
};

const ChartSample = ({ t }) => (
  <div className="simulation__plot__card">
    <div className="simulation__plot__chart">
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">
              {t("charts.react_chartjs.polar_area")}
            </h5>
          </div>
          <Polar data={data} options={options} />
        </CardBody>
      </Card>
    </div>
  </div>
);

ChartSample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ChartSample);
