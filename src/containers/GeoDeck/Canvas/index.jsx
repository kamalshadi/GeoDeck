import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from "reactstrap";
import classnames from "classnames";
import { withTranslation } from "react-i18next";
import Cube from "../../Three";
import VRScene from "../../Aframe";
import MultipleYAxesScatterChart from "../../Charts/Recharts/components/MultipleYAxesScatterChart";
import jet from "./jet.png";

const MainContainer = ({
  detailBar,
  controlBar,
  xy,
  toggleDetailBar,
  toggleControlBar,
  toggleXY,
  tab,
  setTab,
}) => {
  const renderGraph = () => {
    switch (tab) {
      case 0:
        return <Cube />;
      case 1:
        return (
          <div className="chart">
            <h2>This is Simulation View!</h2>
          </div>
        );
        // return <MultipleYAxesScatterChart />;
      case 2:
        return <VRScene />;
      case 3:
        return (
          <div className="chart">
            <h2>This is Simulation Table!</h2>
          </div>
        );
      default:
        return <Cube />;
    }
  };

  const renderPageSetting = () => {
    return (
      <div className="d-flex page-setting">
        <div
          className={`setting geo-button icon__toggle--xy ${
            !xy ? "active" : ""
          }`}
          onClick={toggleXY}
        />

        <div
          className={`setting geo-button icon__toggle--bottom-bar ${
            !controlBar ? "active" : ""
          }`}
          onClick={toggleControlBar}
        />
        <div
          className={`setting geo-button icon__toggle--side-bar ${
            !detailBar ? "active" : ""
          }`}
          onClick={toggleDetailBar}
        />
      </div>
    );
  };

  return (
    <>
      {renderGraph()}
      <div>
        <div className="d-flex">
          <div
            className={`geo-button ${tab === 0 ? "selected" : null}`}
            onClick={() => setTab(0)}
          >
            3D
          </div>
          <div
            className={`geo-button ${tab === 1 ? "selected" : null}`}
            onClick={() => setTab(1)}
          >
            ST
          </div>
          <div
            className={`geo-button ${tab === 2 ? "selected" : null}`}
            onClick={() => setTab(2)}
          >
            VR
          </div>
        </div>
        {/* <div style={{ width: "300px" }}>
          <img width="300" src={jet} alt="jet-color-map" />
        </div> */}
        {renderPageSetting()}
      </div>
    </>
  );
};

export default withTranslation("common")(MainContainer);
