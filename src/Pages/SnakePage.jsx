import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import NippleJoystick from '../Components/NippleJoystick/NippleJoystick';
import Snake from '../Components/Snake/Snake';
import Header from '../Components/Header';
import Modal from '../Components/Modal';

const SnakePage = () => {
  
  const [showModalWelcome, setShowModalWelcome] = useState(true);
  const [showModalEndGame, setShowModalEndGame] = useState(false);
  
  const history = useHistory();

  const handleResize = () => {
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
    window.location.reload();
  }

  useEffect( () => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });
  
  return (
    <div>
      <Header />
      <Snake />
      <NippleJoystick />
      
      
      {
        showModalWelcome && 
        <Modal
          headerTitle ={'¡Te doy la bienvenida!'}
          contentText = { 'Para jugar podes utilizar las flechas del teclado o hacer click con el mouse en el joystick de la derecha.' }
          buttonPrimary= { '¡Jugar Ahora!' }
          onClickPrimary= { () => { 
            setShowModalWelcome(false);  
          }}
          buttonSecondary = { 'Menu Principal' }
          onClickSecondary = {() => { history.push('/') }}
        />
      }
      {
        showModalEndGame && 
        <Modal
          headerTitle ={'¡Bien hecho!'}
          contentText = { `Haz alcanzado 55 puntos.\n Tu puntuación mas alta es ${75}.` }
          buttonPrimary= { 'Volver a Juagar' }
          onClickPrimary= { () => { 
            setShowModalEndGame(false);  
          }}
          buttonSecondary = { 'Menu Principal' }
          onClickSecondary = {() => { history.push('/') }}
        />
      }
    </div>
    
 
    
  )
}

export default SnakePage;