import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import Gallery from './Gallery';
import Items from './imgs';

const tags = [
  { tag: 'cap', title: 'Images' },
  { tag: 'watch', title: 'Videos' },
  { tag: 'glasses', title: 'Charts' }
];

const FilterGallery = () => (
  <Col md={12} lg={12}>
      <Gallery images={Items} tags={tags} />
  </Col>
);

export default FilterGallery;
