import React from 'react';
import {ScissorOutlined} from '@ant-design/icons'


const Toolbar = () => {
  return (
    <>
      {Array(10).fill(0).map((v,ind)=>{
        return <ScissorOutlined />
      })}
    </>
  )
}





export default Toolbar;
