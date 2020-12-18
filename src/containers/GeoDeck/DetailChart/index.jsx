import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import LineChart from '../../Two/LineChart'
import HeatMap from '../../Two/Heatmap'
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [];

for (let i = 0; i < 20; i += 1) {
  const series = [];
  for (let j = 0; j < 100; j += 1) {
    series.push({ x: j, y: ((i / 10) + 1) * Math.sin((Math.PI * (i + j)) / 50) });
  }
  data.push({
    color: i, key: i, data: series, opacity: 0.8,
  });
}

const LineSeriesWithManyColors = ({ t }) => (
  <div style={{ height:"350px" }}>
    {true?<HeatMap />:<LineChart />}
  </div>
)

export default withTranslation('common')(LineSeriesWithManyColors);
