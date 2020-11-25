import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import {
  HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
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
    <div>
          <FlexibleWidthXYPlot
            height={250}
            colorType="linear"
            colorDomain={[0, 9]}
            colorRange={['#70bbfd', '#c88ffa']}
          >
            <HorizontalGridLines />
            <VerticalGridLines />
            <XAxis />
            <YAxis />
            {data.map(props => <LineSeries className="react-vis__svg-line" {...props} />)}
          </FlexibleWidthXYPlot>
    </div>
)

export default withTranslation('common')(LineSeriesWithManyColors);
