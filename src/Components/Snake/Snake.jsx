import React, { useEffect } from 'react'
import {startGame} from './snakeGame';

const Snake = () => {
  
  let canvasHeight = window.innerHeight*0.6 - window.innerHeight*0.6 % 20;
  let canvasWidth = window.innerWidth - window.innerWidth % 20 - 40;

  useEffect(() => {
    
    startGame();    
    
  }, []);
  
  return (
    <div>
      <canvas id='snake-canvas' width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  )
}

export default Snake;
