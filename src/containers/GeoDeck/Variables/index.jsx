import React, { useState } from 'react';
import { CheckCircleOutlined, CheckCircleFilled, PlusCircleFilled } from '@ant-design/icons';

const V = ['Pressure', 'Temprature', 'Saturation', 'Porosity', 'Permeability', 'N/A', 'N/A', 'N/A']
const Variables = () => {
  const [vs, setVs] = useState([])
  const clickHandler = (ind) => {
    if (vs.includes(ind)) {
      setVs(vs.filter(v => v !== ind))
      return
    }
    setVs([...vs, ind])
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
              <CheckCircleFilled className={vs.includes(index) ? 'selected' : ''} />
              <span className="variable">&nbsp;{V[index]}</span>
            </div>
            <div className="variable" onClick={()=> clickHandler(index + 1)}>
              <CheckCircleFilled className={vs.includes(index + 1) ? 'selected' : ''} />
              <span>&nbsp; {V[index+1]}</span>
            </div>
          </div>
        )
      })}
      </div>
  )
}

export default Variables;
