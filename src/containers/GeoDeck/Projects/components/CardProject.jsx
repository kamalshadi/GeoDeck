import React from "react";
import { Card, CardBody, Col, Button, CardHeader } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import { sourceToTag } from "../../../../shared/helpers";

const defaultImage = `${process.env.PUBLIC_URL}/img/co2.png`;
const imageUrl = `${process.env.PUBLIC_URL}/img/gallery/`;

const CardProject = (props) => {
  const { source, title, time, id } = props.item;

  const renderMedia = () => {
    const sourceTag = sourceToTag(source);

    if (sourceTag === "img" || !source) {
      return (
        <CardMedia
          component="img"
          src={source ? `${imageUrl}${source}` : defaultImage}
          style={{ minHeight: "auto" }}
          className={
            source
              ? "project-card__thumbnail project-card__thumbnail--valid"
              : " project-card__thumbnail project-card__thumbnail--default"
          }
          title={title}
        />
      );
    } else if (sourceTag === "video") {
      return (
        <CardMedia
          src={`${imageUrl}${source}`}
          autoPlay={true}
          loop={true}
          // style={{ height: "150px" }}
          component="video"
          style={{ minHeight: "auto" }}
          className={"project-card__thumbnail project-card__thumbnail--valid"}
          title={title}
        />
      );
    } else {
      return <div>NO IMAGE OR VIDEO!!!!</div>;
    }
  };

  return (
    <Card>
      <CardBody className="project-card__container">
        <CardHeader>
          {renderMedia()}
          {/* <CardMedia
              src={source ? `${imageUrl}${source}` : defaultImage}
              style={{ height: "150px" }}
              component={images.includes(extension) ? "picture" : "video"}
              className={
                source
                  ? "project-card__img project-card__img--valid"
                  : " project-card__img project-card__img--default"
              }
              title={title}
            />
            {videos.includes(extension) && (
              <video width="320" height="240" autoPlay loop>
                <source
                  src={`${imageUrl}${source}`}
                  type={`video/${extension}`}
                />
              </video>
            )} */}
          {/* <img
              className=
              src={image ? `${imageUrl}${image}` : defaultImage}
              alt=""
            /> */}
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
  );
};

export default CardProject;

{
  /*
  <p className="project-card__feature project-card__feature--inactive">Monthly update</p>
  <p className="project-card__feature project-card__feature--inactive">Free support</p>
  */
}
