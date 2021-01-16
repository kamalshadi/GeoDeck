import React, { PureComponent } from "react";
import { Scatter } from "react-chartjs-2";

class ChartScatter extends PureComponent {
  render() {
    const { dataList, options, plugins } = this.props;

    const datasets = dataList.map(({ name, xYData, color }) => {
      return {
        label: name,
        fill: false,
        lineTension: 0.3,
        backgroundColor: color,
        borderColor: color,
        // borderWidth: 1,
        // borderDash: [3, 3],
        pointBackgroundColor: color,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 3,
        pointHitRadius: 10,
        data: xYData,
      };
    });

    const scatterData = {
      labels: [],
      datasets: datasets,
    };

    // const options = {
    //   scales: {
    //     xAxes: [
    //       {
    //         scaleLabel: {
    //           display: true,
    //           labelString: "time",
    //         },
    //         type: "linear",
    //         position: "bottom",
    //       },
    //     ],

    //     yAxes: [
    //       {
    //         scaleLabel: {
    //           display: true,
    //           labelString: `${variableName} (${variableUnit})`,
    //         },
    //       },
    //     ],
    //   },
    // };
    return (
      <React.Fragment>
        <Scatter
          data={scatterData}
          options={options}
          plugins={plugins}
        />
      </React.Fragment>
    );
  }
}

export default ChartScatter;

// const data = {
//   labels: ["January", "February", "March", "April", "May"],
//   datasets: [
//     {
//       label: "Blue",
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: "#36A2EB",
//       borderColor: "#36A2EB",
//       borderWidth: 1,
//       borderDash: [5, 3],
//       pointBackgroundColor: "#36A2EB",
//       pointHoverRadius: 3,
//       pointHoverBorderWidth: 1,
//       pointRadius: 2,
//       pointHitRadius: 10,
//       data: [
//         { x: 0, y: 65 },
//         { x: 1, y: 68 },
//         { x: 2, y: 98 },
//         { x: 3, y: 85 },
//         { x: 4, y: 34 },
//       ],
//     },
//     {
//       label: "Red",
//       fill: false,
//       lineTension: 0.3,
//       backgroundColor: "#FF6384",
//       borderColor: "#FF6384",
//       borderWidth: 1,
//       borderDash: [3, 3],
//       pointBackgroundColor: "#FF6384",
//       pointHoverRadius: 2,
//       pointHoverBorderWidth: 1,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [
//         { x: 0, y: 75 },
//         { x: 1, y: 34 },
//         { x: 2, y: 49 },
//         { x: 3, y: 78 },
//         { x: 4, y: 18 },
//       ],
//     },
//   ],
// };
