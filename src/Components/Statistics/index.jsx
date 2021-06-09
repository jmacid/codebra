import { useState } from 'react';

import './StatisticsStyle.css';

function Statistics() {
  
  const [gamesPlayed, setGamesPlayed] = useState(15);
  const [higherScore, setHigherScore] = useState(85);
  const [higherLevel, setHigherLevel] = useState(6);
  
  
  return (
    <section className="StatisticsSection">
      
      <h2 className="statisticsTitle">Statistics</h2>
      
      <table className="statisticsTable">
        <tr>
          <th>Juegos jugados</th>
          <td>{ gamesPlayed }</td>
        </tr>
        <tr>
          <th>Puntuación mas alta</th>
          <td>{ higherScore }</td>
        </tr>
        <tr>
          <th>Nivel mas alto</th>
          <td>{ higherLevel }</td>
        </tr>
      </table>
    </section>
  )
}

export default Statistics;