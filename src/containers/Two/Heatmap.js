import React, { useState, useEffect } from 'react'

const HeatMap = () => {
  const [frame, setFrame] = useState(0)

  const tick = f => {
    setFrame(f => Math.min((f + 1),24) )
  }

  useEffect(() => {
    const interval = setInterval(()=> tick(frame), 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/img/gem/gem_0_${frame}.png`} width='400px' alt="heat-map" />
      <span onClick = {()=> setFrame(frame+1)}>{frame}</span>
    </>
  )
}

export default HeatMap
