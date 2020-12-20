import React from "react";
import { Card, CardBody, Col, Button, CardHeader } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

const defaultImage = `${process.env.PUBLIC_URL}/img/co2.png`;
const imageUrl = `${process.env.PUBLIC_URL}/img/gallery/`;

const CardProject = (props) => {
  const { image, title, time, id } = props.project;

  return (
    <Col md={4} xl={3} sm={12} className="d-flex project-card">
      <Card>
        <CardBody className="project-card__container">
          <CardHeader>
            <img
              className={
                image
                  ? "project-card__img project-card__img--valid"
                  : " project-card__img project-card__img--default"
              }
              src={image ? `${imageUrl}${image}` : defaultImage}
              alt=""
            />
          </CardHeader>
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
    </Col>
  );
};

export default CardProject;

{
  /*
  <p className="project-card__feature project-card__feature--inactive">Monthly update</p>
  <p className="project-card__feature project-card__feature--inactive">Free support</p>
  */
}
