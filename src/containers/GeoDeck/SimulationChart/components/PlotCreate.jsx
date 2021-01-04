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

const icons = [
  { name: "pie", type: "pie", element: <PieChartFilled /> },
  { name: "area", type: "area", element: <AreaChartOutlined /> },
  { name: "bar", type: "bar", element: <BarChartOutlined /> },
  { name: "radar", type: "radar", element: <RadarChartOutlined /> },
  { name: "line", type: "line", element: <LineChartOutlined /> },
  { name: "scatter", type: "scatter", element: <DotChartOutlined /> },
];

const PlotCreate = (props) => {
  const onCreate = (type) => {
    console.log(type);
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

export default PlotCreate;
