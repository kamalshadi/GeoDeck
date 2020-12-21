import React from "react";
import { Card, CardBody, Col, Button, CardHeader } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { CardMedia } from "@material-ui/core";
import { sourceToTag } from "../../../../shared/helpers";

const defaultImage = `${process.env.PUBLIC_URL}/img/co2.png`;
const imageUrl = `${process.env.PUBLIC_URL}/img/gallery/`;

const CardGallery = (props) => {
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
        <CardHeader>{renderMedia()}</CardHeader>
      </CardBody>
    </Card>
  );
};

export default CardGallery;
