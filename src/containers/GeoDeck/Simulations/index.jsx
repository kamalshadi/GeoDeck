import React, { useState } from 'react';
import { CheckCircleFilled } from '@ant-design/icons';

const V = [{name:'S1', color:'#f50'}, {name:'S2', color:'#faad14'}, {name:'S3', color:'#a0d911'}, {name:'S4', color:'#1890ff'}, {name:'S5', color:'#13c2c2'}]
const Simulations = () => {
  const [vs, setVs] = useState([])
  const clickHandler = (ind) => {
    if (vs.includes(ind)) {
      setVs(vs.filter(v => v !== ind))
      return
    }
    setVs([...vs, ind])
  }

  return (
    <div className="simulatins">
      <h5>Simulations</h5>
      {/* <div className="sim-table">
        <div style={{marginRight:'60px'}}>
          {V.slice(0,3).map((v,index)=>{
            return (
              <div className="sim-row" onClick={()=> clickHandler(index)}>
                <CheckCircleFilled className={vs.includes(index) ? 'selected' : ''}/>
                <span className="variable">&nbsp; {v.name}</span>
                <span className="legend" style={{backgroundColor: v.color}}>&nbsp;&nbsp;&nbsp;</span>
              </div>
            )
          })}
        </div>
        <div>
          {V.slice(3,6).map((v,index)=>{
            return (
              <div className="sim-row" onClick={()=> clickHandler(index+3)}>
                <CheckCircleFilled className={vs.includes(index + 3) ? 'selected' : ''}/>
                <span className="variable">&nbsp; {v.name}</span>
                <span className="legend" style={{backgroundColor: v.color}}>&nbsp;&nbsp;&nbsp;</span>
              </div>
            )
          })}
        </div>
      </div> */}
    </div>
  )
}

export default Simulations;
