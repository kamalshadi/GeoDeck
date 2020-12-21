import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import { renderMedia } from "../../../../shared/helpers";

const CardGallery = (props) => {
  const { source, title, time, id } = props.item;

  return (
    <Card>
      <CardBody className="project-card__container">
        <CardHeader>{renderMedia(source, title)}</CardHeader>
      </CardBody>
    </Card>
  );
};

export default CardGallery;
