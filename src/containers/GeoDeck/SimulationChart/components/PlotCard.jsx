import React from "react";
import { Card, CardBody } from "reactstrap";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";

const PlotCard = ({ t, children, number }) => (
  <div className="simulation__plot__card">
    <div className="simulation__plot__chart">
      <Card>
        <CardBody>
          <div className="d-flex justify-content-between">
            <h5 className="bold-text">{`Plot ${number}`}</h5>
            <h5 className="bold-text">export</h5>
          </div>
          {children}
        </CardBody>
      </Card>
    </div>
  </div>
);

PlotCard.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(PlotCard);


// {plot.type === "scatter" ? (
//   <React.Fragment>
//     <p>{`${name} Export`}</p>
//     <div className="simulation__plot__chart" style={{ height: 400 }}>
//       <PlotChart name={name} data={dataArray} />
//     </div>
//   </React.Fragment>
// ) : (
//   <React.Fragment>
//     <p>{`${plot.name} Export`}</p>
//     <div className="simulation__plot__chart">
//       <img height="250px" src={`${process.env.PUBLIC_URL}/img/co2.png`} />
//     </div>
//   </React.Fragment>
// )}