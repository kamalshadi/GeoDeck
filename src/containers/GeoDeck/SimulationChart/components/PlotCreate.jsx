import React from "react";
import {
  AreaChartOutlined,
  BarChartOutlined,
  DotChartOutlined,
  LineChartOutlined,
  PieChartFilled,
  PieChartOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { createPlot } from "../../../../redux/actions/plotAction";
import { connect } from "react-redux";

const icons = [
  { name: "pie", type: "pie", element: <PieChartFilled /> },
  { name: "area", type: "area", element: <AreaChartOutlined /> },
  { name: "bar", type: "bar", element: <BarChartOutlined /> },
  { name: "radar", type: "radar", element: <RadarChartOutlined /> },
  { name: "scatter", type: "scatter", element: <DotChartOutlined /> },
  { name: "line", type: "line", element: <LineChartOutlined /> },
];

const PlotCreate = (props) => {
  const onCreate = (type) => {
    // template => {id: 2, name: "Scatter", type: "scatter" },
    switch (type) {
      case "scatter": {
        props.createPlot({ name: "Scatter", type: "scatter" });
        break;
      }

      case "line": {
        props.createPlot({ name: "Line", type: "line" });
        break;
      }
    }
  };

  return (
    <div className="simulation__plot__card new">
      <p>Add New Plot</p>
      <div className="simulation__plot__chart new">
        {icons.map(({ name, type, element }, index) => (
          <div key={index} onClick={(e) => onCreate(type)}>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(null, { createPlot })(PlotCreate);
