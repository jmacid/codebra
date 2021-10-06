import React from 'react'

import Header from '../Components/Header';
import PlaySnakeGame from '../Components/PlaySnakeGame';
import Statistics from '../Components/Statistics';
import About from '../Components/About';
import Footer from '../Components/Footer';
import {startUI} from './HomeUI';

const Home = () => {

  const {
    highestScore,
    gamesPlayed,
    highestLevel
  } = startUI();

  return (
    <>
      <Header />
      <PlaySnakeGame />
      <Statistics
        highestScore= {highestScore}
        gamesPlayed = {gamesPlayed}
        highestLevel = {highestLevel}
      />
      <About />
      <Footer />
    </>
  )
}

export default Home;
