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
      <tbody>
          <tr>
            <th>Juegos jugados</th>
            <td>{ gamesPlayed }</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Puntuación mas alta</th>
            <td>{ higherScore }</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Nivel mas alto</th>
            <td>{ higherLevel }</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Statistics;