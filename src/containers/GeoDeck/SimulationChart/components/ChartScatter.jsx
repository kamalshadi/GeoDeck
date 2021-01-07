import React, { PureComponent } from "react";
// import {
//   ScatterChart,
//   Scatter,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
import { Scatter } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const tooltipColor = {
  color: "#70bbfd",
};

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

class ChartScatter extends PureComponent {
  render() {
    const { name, data } = this.props;

    // console.log(name);
    console.log(data);

    const datasets = data.map((d) => {
      let rColor = Math.floor(Math.random() * 16777215).toString(16);
      let color = `#${rColor}`;
      return {
        label: color,
        fill: false,
        lineTension: 0.3,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 1,
        borderDash: [3, 3],
        pointBackgroundColor: color,
        pointHoverRadius: 2,
        pointHoverBorderWidth: 1,
        pointRadius: 1,
        pointHitRadius: 10,
        data: d,
      };
    });

    const scatterData = {
      labels: [],
      datasets: datasets,
    };

    console.log(datasets);
    const options = {
      scales: {
        xAxes: [
          {
            type: "linear",
            position: "bottom",
          },
        ],
      },
    };
    return (
      <React.Fragment>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">{"chart js scatter chart"}</h5>
            </div>
            <Scatter data={scatterData} options={options} />
            {/* <ResponsiveContainer>
              <ScatterChart
                // height={400}
                margin={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
              >
                <XAxis type="number" dataKey="x" reversed={false} />
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="number" dataKey="y" stroke="#70bbfd" />
                <Tooltip itemStyle={tooltipColor} />

                {data.map((d) => {
                  let rColor = Math.floor(Math.random() * 16777215).toString(
                    16
                  );
                  return <Scatter name={name} data={d} fill={`#${rColor}`} />;
                })}
              </ScatterChart>
            </ResponsiveContainer> */}
          </CardBody>
        </Card>

        {/* <ResponsiveContainer> */}
        {/* <ScatterChart
          //   height={400}
          margin={{
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
        >
          <XAxis type="number" dataKey="x" reversed={false} />
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis type="number" dataKey="y" stroke="#70bbfd" />
          <Tooltip itemStyle={tooltipColor} />

          {data.map((d) => {
            let rColor = Math.floor(Math.random() * 16777215).toString(16);
            return <Scatter name={name} data={d} fill={`#${rColor}`} />;
          })}
        </ScatterChart> */}
        {/* </ResponsiveContainer> */}
      </React.Fragment>
    );
  }
}

export default ChartScatter;
