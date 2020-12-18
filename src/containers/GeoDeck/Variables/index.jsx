import React, { useState } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';
import { connect } from 'react-redux'
import { changeSample } from '../../../redux/actions/threeActions'

const V = ['Pressure', 'Temprature', 'Saturation', 'Porosity', 'Permeability', 'N/A', 'N/A', 'N/A']
const Variables = ({changeSample, three}) => {
  const [vs, setVs] = useState(0)
  const clickHandler = (ind) => {
    if (vs === ind) {
      return
    }
    changeSample({
      method: three.sample.method,
      variable: V[ind],
    })
    setVs(ind)
  }

  return (
    <div className="variables">
      {V.map((v, index) => {
        if (index % 2 === 1) return null
        let l = V[index + 1].length
        let filler = Array(12 - l).fill(1)
        return (
          <div>
            <div className="variable" onClick={()=> clickHandler(index)}>
              <CheckCircleFilled className={vs===index ? 'selected' : ''} />
              <span className="variable">&nbsp;{V[index]}</span>
            </div>
            <div className="variable" onClick={()=> clickHandler(index + 1)}>
              <CheckCircleFilled className={vs === (index + 1) ? 'selected' : ''} />
              <span>&nbsp; {V[index+1]}</span>
            </div>
          </div>
        )
      })}
      </div>
  )
}

function mapStateToProps ({
  three
  }) {
  return {
    three
  }
}

const mapDispatchToProps = {
  changeSample
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Variables)
