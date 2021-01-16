import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Line } from "react-chartjs-2";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

// const options = {
//   // legend: {
//   //   position: "bottom",
//   // },
//   layout: {
//     padding: {
//       top: 20,
//     },
//   },
//   scales: {
//     xAxes: [
//       {
//         scaleLabel: {
//           display: true,
//           labelString: "Time",
//         },
//         type: "linear",
//         // position: "bottom",
//         gridLines: {
//           color: "#757575",
//           borderDash: [2,2],
//         },
//         ticks: {
//           fontColor: "#757575",
//         },
//       },
//     ],

//     yAxes: [
//       {
//         scaleLabel: {
//           display: true,
//           labelString: "point",
//         },
//         gridLines: {
//           color: "#757575",
//           borderDash: [3, 3],
//         },
//         ticks: {
//           fontColor: "#757575",
//         },
//       },
//     ],
//   },
//   // xAxes: [
//   //   {
//   //     gridLines: {
//   //       color: "rgb(204, 204, 204)",
//   //       borderDash: [3, 3],
//   //     },
//   //     ticks: {
//   //       fontColor: "rgb(204, 204, 204)",
//   //     },
//   //   },
//   // ],
//   // yAxes: [
//   //   {
//   //     gridLines: {
//   //       color: "rgb(204, 204, 204)",
//   //       borderDash: [3, 3],
//   //     },
//   //     ticks: {
//   //       fontColor: "rgb(204, 204, 204)",
//   //     },
//   //   },
//   // ],
// };

const ChartLine = (props) => {
  const { dataList, options, plugins, t } = props;

  const datasets = dataList.map(({ name, xYData, color }) => {
    return {
      label: name,
      fill: false,
      lineTension: 0.3,
      backgroundColor: color,
      borderColor: color,
      borderWidth: 1,
      // borderDash: [3, 3],
      pointBackgroundColor: color,
      pointHoverRadius: 4,
      pointHoverBorderWidth: 1,
      pointRadius: 3,
      pointHitRadius: 10,
      data: xYData,
    };
  });

  // const options = {
  //   scales: {
  //     xAxes: [
  //       {
  //         scaleLabel: {
  //           display: true,
  //           labelString: "Time",
  //           fontColor: "#929292",
  //         },
  //         type: "linear",
  //         gridLines: {
  //           color: "#5E5E5E",
  //           borderDash: [2, 2],
  //         },
  //         ticks: {
  //           fontColor: "#929292",
  //         },
  //       },
  //     ],

  //     yAxes: [
  //       {
  //         scaleLabel: {
  //           display: true,
  //           labelString: `${variableName} (${variableUnit})`,
  //           fontColor: "#929292",
  //         },
  //         gridLines: {
  //           color: "#5E5E5E",
  //           borderDash: [3, 3],
  //         },
  //         ticks: {
  //           fontColor: "#929292",
  //         },
  //       },
  //     ],
  //   },
  // };

  const lineData = {
    labels: [],
    datasets: datasets,
  };

  return (
    <React.Fragment>
      {datasets ? (
        <Line data={lineData} options={options} plugins={plugins} />
      ) : (
        <Line />
      )}
    </React.Fragment>
  );
};

ChartLine.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(ChartLine);
