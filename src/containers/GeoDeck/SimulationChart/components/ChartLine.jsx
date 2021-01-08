import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

const options = {
  // legend: {
  //   position: "bottom",
  // },
  layout: {
    padding: {
      top: 20,
    },
  },
  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "time",
        },
        gridLines: {
          color: "rgb(204, 204, 204)",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "rgb(204, 204, 204)",
        },
      },
    ],

    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "point",
        },
        gridLines: {
          color: "rgb(204, 204, 204)",
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: "rgb(204, 204, 204)",
        },
      },
    ],
  },
  // xAxes: [
  //   {
  //     gridLines: {
  //       color: "rgb(204, 204, 204)",
  //       borderDash: [3, 3],
  //     },
  //     ticks: {
  //       fontColor: "rgb(204, 204, 204)",
  //     },
  //   },
  // ],
  // yAxes: [
  //   {
  //     gridLines: {
  //       color: "rgb(204, 204, 204)",
  //       borderDash: [3, 3],
  //     },
  //     ticks: {
  //       fontColor: "rgb(204, 204, 204)",
  //     },
  //   },
  // ],
};

const ChartLine = (props) => {
  const { dataList, t } = props;

  // console.log(name);
  console.log(dataList);

  const datasets = dataList.map(({ name, rawData, color }) => {
    return {
      label: name,
      fill: false,
      lineTension: 0.3,
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
      // borderDash: [3, 3],
      pointBackgroundColor: color,
      pointHoverRadius: 6,
      pointHoverBorderWidth: 1,
      pointRadius: 5,
      pointHitRadius: 10,
      data: rawData,
    };
  });

  const lineData = {
    labels: [],
    datasets: datasets,
  };

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div
            className="card__title"
          >
            <h5 className="bold-text">{"Line Chart"}</h5>
          </div>
          {datasets ? <Line data={lineData} options={options} /> : <Line />}
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

ChartLine.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ChartLine);
