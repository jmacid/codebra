import React from 'react';
import NippleJoystick from '../Components/NippleJoystick/NippleJoystick';
import Snake from '../Components/Snake/Snake';

const SnakePage = () => {
  return (
    <div>
      <script type="text/javascript" src="./scripts/snake.js" defer></script>
      <h1>Snake Game</h1>
      {/* <NippleJoystick /> */}
      <Snake />
    </div>
  )
}

export default SnakePage;