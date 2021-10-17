import './ScoreBoard.css';


const ScoreBoard = ({score, level}) => {
  return (
    <div className="scoreboard-container">
      <h2 className="level-info">Nivel {level}</h2>
      <h2 className="score-info">Puntaje {score}</h2>
    </div>
  );
};

export default ScoreBoard;
