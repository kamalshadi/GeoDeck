import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import pressData from './pressure_point.json'
import tempData from './temp_point.json'
import { ResponsiveLine } from '@nivo/line'

const theme = {
    textColor: '#ffffff',
    fontSize: 11,
    axis: {
        domain: {
            line: {
                stroke: '#fff',
                strokeWidth: 1
            }
        },
        ticks: {
            line: {
                stroke: '#fff',
                strokeWidth: 1
            }
        }
    },
    grid: {
        line: {
            stroke: "#fff",
            strokeWidth: 0
        }
    }
}
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
//
const minMax = p => {
  if (p) return [1800,1900]
  else return [120,122]
}
const MyResponsiveLine = ({ three }) => {
    const m = minMax(three.sample.variable !== 'Temprature')
    return (
      <ResponsiveLine
        data={three.sample.variable === 'Temprature'?tempData:pressData}
        margin={{ top: 10, right: 0, bottom: 40, left: 50 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: m[0], max: m[1], stacked: false, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Time (frame)',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: three.sample.variable || 'Pressure',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        theme = {theme}
        tooltip={({point}) => {
          console.log(point)
          return (
            <div
                style={{
                    background: '#000',
                    padding: '12px 16px',
                }}
            >
                {`T: ${point.data.Temprature.toFixed(2)}`}
                <br />
                {`P: ${point.data.Pressure.toFixed(2)}`}
                <br />
                {`Saturation: ${point.data.Saturation.toFixed(2)}`}
            </div>
          )
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)
}

function mapStateToProps({
  three
  }){
  return {
    three
  }
}

const mapDispatchToProps = {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyResponsiveLine)