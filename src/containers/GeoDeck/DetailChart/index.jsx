import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux'
import LineChart from '../../Two/LineChart'
import HeatMap from '../../Two/Heatmap'
import Dist from '../../Two/Dist'

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

const LineSeriesWithManyColors = ({ three }) => (
  <div style={{ height:"350px", marginBottom:'25px' }}>
    {!three.sample.method && <><p>Live Chart</p><Dist /></>}
    {/* true?<HeatMap />:<LineChart /> */}
  </div>
)

function mapStateToProps ({
  three
  }) {
  return {
    three
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation('common')(LineSeriesWithManyColors))
