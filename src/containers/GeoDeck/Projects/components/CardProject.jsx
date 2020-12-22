import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { renderMedia } from "../../../../shared/helpers";

const CardProject = (props) => {
  const { source, title, time, id } = props.item;

  return (
    <Card>
      <CardBody className="project-card__container">
        <CardHeader>{renderMedia(source, title)}</CardHeader>
        <div className="project-card__body">
          {/* <h3 className="project-card__plan">Toy Example</h3>
          <hr /> */}
          <p className="project-card__title">{title}</p>
          <p className="project-card__edited">{`Edited: ${time}`}</p>
          {/* <p className="project-card__feature">Modified: 1 Dec</p> */}
          {/* <NavLink
            className="account__btn btn btn-primary"
            to="/main"
            style={{ marginTop: "15px" }}
          >
            Load
          </NavLink> */}
          <Link to={`/main/${id}`} className="stretched-link" />
        </div>
      </CardBody>
    </Card>
  );
};

export default CardProject;
