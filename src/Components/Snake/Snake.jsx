import React, { useEffect } from 'react'

const Snake = () => {
  
  let canvasHeight = window.innerHeight*0.6 - window.innerHeight*0.6 % 20;
  let canvasWidth = window.innerWidth - window.innerWidth % 20 - 40;
  
  return (
    <div>
      <canvas id='snake-canvas' width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  )
}

export default Snake;
