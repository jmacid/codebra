import './ScoreBoard.css';


const ScoreBoard = (props) => {
  const {score, level} = props;
  return (
    <div className="scoreboard-container">
      <h2 className="level-info">Level {level}</h2>
      <h2 className="score-info">Score {score}</h2>
    </div>
  );
};

export default ScoreBoard;
