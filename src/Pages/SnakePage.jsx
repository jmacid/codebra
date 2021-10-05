import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import NippleJoystick from '../Components/NippleJoystick/NippleJoystick';
import Snake from '../Components/Snake/Snake';
import Header from '../Components/Header';
import Modal from '../Components/Modal';
import {startGame} from '../game/snakeGame';


const SnakePage = () => {
  
  const [showModalWelcome, setShowModalWelcome] = useState(true);
  const [showModalEndGame, setShowModalEndGame] = useState(false);
  const [onGame, setOnGame] = useState(true);
  const [scoreGame, setScoreGame] = useState(0);
  const [levelGame, setLevelGame] = useState(1);

  const history = useHistory();

  const handleResize = () => {
    console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
    window.location.reload();
  }

  const handleOnGame = (isOnGame) => {
    setOnGame(isOnGame);
  }

  const handleScoreGame = (deltaScore) => {
    setScoreGame(score => score + deltaScore);
  }

  const handleLevelGame = (deltaLevel) => {
    setLevelGame(level => level + deltaLevel);
  }


  useEffect( () => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  useEffect( () => {
    if(onGame === false) {
      setShowModalEndGame(true);
    }
  }, [onGame]);

  useEffect( ()=> {
    console.log(`scoreGame: ${scoreGame} - ${levelGame}`);
  }, [scoreGame, levelGame]);

  
  return (
    <div>
      <Header />
      <Snake />
      <NippleJoystick />
      <p>Score: {scoreGame} Level: {levelGame}</p>
      
      
      {
        showModalWelcome && 
        <Modal
          headerTitle ={'¡Te doy la bienvenida!'}
          contentText = { 'Para jugar podes utilizar las flechas del teclado o hacer click con el mouse en el joystick de la derecha.' }
          buttonPrimary= { '¡Jugar Ahora!' }
          onClickPrimary= { () => { 
            setShowModalWelcome(false);
            startGame(handleOnGame, handleScoreGame, handleLevelGame);  
          }}
          buttonSecondary = { 'Menu Principal' }
          onClickSecondary = {() => { history.push('/') }}
        />
      }
      {
        showModalEndGame &&
        <Modal
          headerTitle ={'¡Bien hecho!'}
          contentText = { `Haz alcanzado ${scoreGame} puntos.\n Tu puntuación mas alta es ${75}.` }
          buttonPrimary= { 'Volver a Jugar' }
          onClickPrimary= { () => { 
            setShowModalEndGame(false);
            setScoreGame(0);
            setLevelGame(1);
            startGame(handleOnGame , handleScoreGame, handleLevelGame);  
          }}
          buttonSecondary = { 'Menu Principal' }
          onClickSecondary = {() => { history.push('/') }}
        />
      }
    </div>
    
 
    
  )
}

export default SnakePage;