import React, { useState } from "react";
import _ from "lodash";
import SimulationPoint from "./SimulationPoint";
import SimulationLine from "./SimulationLine";

const SimulationLinePoint = (props) => {
  const { currentVariable } = props;
  const [tab, setTab] = useState(0);

  // console.log(currentVariable);
  // const [current, setCurrent] = useState(0);

  // console.log(current);
  // console.log(_.values(data)[current]);

  const renderTabs = () => (
    <div className="simulation__plot__panel__tabs">
      <div
        className={`geo-button ${tab === 0 ? "selected" : null}`}
        onClick={() => setTab(0)}
      >
        Points
      </div>
      <div
        className={`geo-button ${tab === 1 ? "selected" : null}`}
        onClick={() => setTab(1)}
      >
        Lines
      </div>
    </div>
  );

  const renderData = () => {
    switch (tab) {
      case 0:
        return !!currentVariable?.points && <SimulationPoint points={currentVariable?.points} />;
      case 1:
        return !!currentVariable?.lines && <SimulationLine lines={currentVariable?.lines} />;
      default:
        return null;
    }
  };

  return (
    <React.Fragment>
      {renderTabs()}
      <div className="simulation__plot__panel__data">{renderData()}</div>
    </React.Fragment>
  );
};

export default SimulationLinePoint;
