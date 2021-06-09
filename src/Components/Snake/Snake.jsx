import React, { useEffect } from 'react'
import SnakeGame from './snakeGame';
import NippleJoystick from '../NippleJoystick/NippleJoystick'

const Snake = () => {
  
  useEffect(() => {
    
    const snakeGame = new SnakeGame('snake-canvas');
    snakeGame.start();
    
  }, []);
  
  const clickMe = () => {
    
    document.dispatchEvent(new KeyboardEvent('keydown',{'key':'ArrowUp'}));
  }
  
  return (
    <div>
      <canvas id="snake-canvas" width="500px" height="500px"></canvas>
      <button id='joystick' onClick={clickMe}>Hola</button>
      <NippleJoystick />
    </div>
  )
}

export default Snake;
