import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardProject from "./components/CardProject";
import CardNew from "./components/CardNew";

const cards = [
  { title: "USA Geothermal", time: "09/09/2020", image: "01.jpg", href: 1 },
  { title: "Well Optimization", time: "10/21/2020", image: "02.jpg", href: 2 },
  { title: "USA Geothermal", time: "11/27/2020", image: "03.jpg", href: 3 },
  { title: "Well Optimization", time: "12/01/2020", image: "04.png", href: 4 },
  { title: "USA Geothermal", time: "12/18/2020", image: null, href: 5 },
];
const ProjectCards = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Your Projects</h3>
          <h3 className="page-subhead subhead">
            Load your project or create a new one
          </h3>
        </Col>
      </Row>
      <Row dir="ltr">
        {cards.map((card, index) => {
          return (
            <CardProject
              key={index}
              title={card.title}
              time={card.time}
              image={card.image}
              href={card.href}
            />
          );
        })}
        <CardNew />
      </Row>
    </Container>
  );
};

export default ProjectCards;

{
  /*
  <CardSpecial />
  <CardPro />
  */
}
