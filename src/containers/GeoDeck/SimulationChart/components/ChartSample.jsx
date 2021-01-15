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
  legend: {
    labels: {
      fontColor: "#929292",
    }
  },
  // layout: {
  //   padding: {
  //     top: 20,
  //   },
  // },
  scale: {
    gridLines: {
      color: "#5E5E5E",
      borderDash: [3, 3],
    },
    ticks: {
      fontColor: "#929292",
    },
  },
};

const ChartSample = ({ t }) => <Polar data={data} options={options} />;

ChartSample.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ChartSample);
