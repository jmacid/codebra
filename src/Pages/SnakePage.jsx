import React from 'react';
import NippleJoystick from '../Components/NippleJoystick/NippleJoystick';
import Snake from '../Components/Snake/Snake';
import Header from '../Components/Header';

const SnakePage = () => {
  return (
    <div>
      <Header />
      <Snake />
      <NippleJoystick />
    </div>
  )
}

export default SnakePage;