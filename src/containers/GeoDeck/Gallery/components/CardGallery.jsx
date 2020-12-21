import React from "react";
import { Card, CardBody, Col, Button, CardHeader } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { CardMedia } from "@material-ui/core";

const defaultImage = `${process.env.PUBLIC_URL}/img/co2.png`;
const imageUrl = `${process.env.PUBLIC_URL}/img/gallery/`;

const CardGallery = (props) => {
  const { source, title, time, id } = props.item;

  const images = ["jpg", "gif", "png"];
  const videos = ["mp4", "3gp", "ogg", "webm"];
  const extension = source ? source.split(".").pop() : null;

  const renderMedia = () => {
    const isVideo = videos.includes(extension);
    const isImage = images.includes(extension);

    if (isVideo) {
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
    } else if (isImage || !source) {
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
    }
    return <div>NO IMAGE OR VIDEO!!!!</div>;
  };

  return (
    <Card>
      <CardBody className="project-card__container">
        <CardHeader>{renderMedia()}</CardHeader>
        {/* <div className="project-card__body">
          <p className="project-card__title">{title}</p>
          <p className="project-card__edited">{`Edited: ${time}`}</p>
          <Link to={`/main/${id}`} className="stretched-link" />
        </div> */}
      </CardBody>
    </Card>
  );
};

export default CardGallery;
