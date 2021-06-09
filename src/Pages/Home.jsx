import React from 'react'

import Header from '../Components/Header';
import PlaySnakeGame from '../Components/PlaySnakeGame';
import Statistics from '../Components/Statistics';
import About from '../Components/About';
import Footer from '../Components/Footer';


const Home = () => {
  return (
    <>
      <Header />
      <PlaySnakeGame />
      <Statistics />
      <About />
      <Footer />
    </>
  )
}

export default Home;
