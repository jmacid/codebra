import './StatisticsStyle.css';

function Statistics( {highestScore, gamesPlayed, highestLevel} ) {
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
            <td>{ highestScore }</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Nivel mas alto</th>
            <td>{ highestLevel }</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Statistics;
