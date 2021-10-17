import './StatisticsStyle.css';

function Statistics( {highestScore, gamesPlayed, highestLevel} ) {

  const clearStats = () => {
    localStorage.setItem('playerStats', JSON.stringify({highestScore:0, gamesPlayed:0, highestLevel:0}));
    window.location.reload();
  }
  return (
    <section className="StatisticsSection">
      
      <h2 className="statisticsTitle">Estadisticas</h2>
      
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

      <button
        className="statisticsPrimaryButton"
        onClick={clearStats}
      >
        Borrar estadisticas
      </button>
    </section>
  );
}

export default Statistics;
