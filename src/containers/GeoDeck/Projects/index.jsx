import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardBasic from './components/CardBasic';
import CardSpecial from './components/CardSpecial';
import CardPro from './components/CardPro';
import CardPremium from './components/CardPremium';

const PricingCards = () => (
  <Container>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Your Projects</h3>
        <h3 className="page-subhead subhead">Load your project or create a new one
        </h3>
      </Col>
    </Row>
    <Row dir="ltr">
      <CardBasic />
      <CardBasic />
      <CardPremium />
    </Row>
  </Container>
);

export default PricingCards;

{/*
  <CardSpecial />
  <CardPro />
  */}
