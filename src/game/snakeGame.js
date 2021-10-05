let canvas;
let ctx;

const boxSize = 20;
const initialPositionX = 0;
const initialPositionY = initialPositionX;
const deltaScore = 10;
const deltaLevel = 1;

const MAX_SCORE = {
  'LEVEL_1': 50,
  'LEVEL_2': 100,
  'LEVEL_3': 200,
  'LEVEL_4': 300,
  'LEVEL_5': 350,
  'LEVEL_6': 400,
  'LEVEL_7': 450,
  'LEVEL_8': 500,
  'LEVEL_9': 550, 
};

let snakePlayer = { }

let bugs = [];

let lastTimestap = 0;
let updateRate = [100, 75, 70, 65, 60, 55, 50, 45, 45, 43];


function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
}

function drawSnake() {
  
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  snakePlayer.body.map( snakeBody => {
    ctx.fillRect(snakeBody.x, snakeBody.y, snakePlayer.size, snakePlayer.size);
  });
  
}

function drawBugs() {
  ctx.fillStyle = 'rgba(200, 0, 0, 0.5)';
  
  bugs.map( bug => {
    ctx.fillRect(bug.x, bug.y, bug.size, bug.size);
  });
}

function generateBug(bug) {
  do {
    bug.x = Math.floor(Math.random()*(canvas.width - boxSize));
    bug.y = Math.floor(Math.random()*(canvas.height - boxSize));
  
    bug.x = (Math.round(bug.x / bug.size) * bug.size);
    bug.y = (Math.round(bug.y / bug.size) * bug.size);
  } while ( didSquareCollide(bug.x, bug.y, bug.size, true) || didBugCollideWithOtherBugs(bug) > 1 ) 
  
}

function addBug(x = null, y = null) {
   const newBug = {
     x,
     y,
     size: boxSize
   }
   
   if( x === null || y === null ) {
     generateBug(newBug)
   }
   
   bugs.push(newBug);
   
}

/**
 * @desc Delete the bug in the bugIndex position in the array
 * 
 * @param { number } bugIndex   The index of the bug to be removed
 * 
 * @return { void }
*/
function deleteBug(bugIndex) {
  
  bugs.splice(bugIndex, 1);
  
}

/**
 * @desc Constructor
 * 
 * @param { Object } data
 * @param { Function } t
 * 
 * @return { Order }
*/
function didBugCollideWithOtherBugs(bug) {
  // const duplicate = bugs.filter( bug => bug)
  return bugs.filter( bugOfBugs => bugOfBugs.x === bug.x && bugOfBugs.y === bug.y).length;
}

function didSnakeEataBug() {
  
  for(let i = 0; i < bugs.length; i++ ){
    if( didSquareCollideWithSqure( snakePlayer.body[0], bugs[i]) ) return i;
  }
  
  return -1;  
}

function didSquareCollideWithSqure(square1, square2) {
  return (square1.x === square2.x && square1.y === square2.y);
}

/** 
 * @desc                             Function to detect collisions between a square and the walls and the snake
 *
 * @param squareX {Int}              x coordinate of the square
 * @param squareY {Int}              y coordinate of the square
 * @param squareSize {Int}           Squeare or Box size
 * @param headIncluded { Boolean }   True: the head is included in the collision
 *
 * @return { Boolean }               Returns true if the square collide with a wall or with the snake
 */
function didSquareCollide(squareX, squareY, squareSize, headIncluded) {
  
  // Wall collision
  if( 
    squareX < 0
    || squareY < 0
    || squareX + squareSize > canvas.width
    || squareY + squareSize > canvas.height
    ){
      return true;
    }
  
  // Body collision
  let i;
  headIncluded ? i = 0 : i = 1; 
  for( ; i < snakePlayer.body.length; i++) {
    if( didSquareCollideWithSqure({x:squareX, y: squareY}, snakePlayer.body[i] ) ) {
        return true;
      }
  }
    
}


function moveSnake() {
  
  // Add first element in body (head)
  snakePlayer.body.unshift( {
    x: snakePlayer.body[0].x + snakePlayer.dx,
    y: snakePlayer.body[0].y + snakePlayer.dy
  });
  
  // Delete last item of the body
  snakePlayer.body.pop();
  
  // Collision detection
  if ( didSquareCollide(snakePlayer.body[0].x, snakePlayer.body[0].y, snakePlayer.size, false) ) {
    return false;
  }else {
    return true;
  }
}


function keyPressed(e) {
  
  const lastXmovement = snakePlayer.body[0].x - snakePlayer.body[1].x;
  const lastYmovement = snakePlayer.body[0].y - snakePlayer.body[1].y;
  
  // console.log(e);
  
  if( (e.key === 'ArrowDown' || e.key === 'Down') && lastYmovement < 0) {
    return;
  }
  else if (e.key === 'ArrowDown' || e.key === 'Down') {
    snakePlayer.dy = snakePlayer.speed;
    snakePlayer.dx = 0;
  }
  if( (e.key === 'ArrowUp' || e.key === 'Up') && lastYmovement > 0) {
    return;
  }
  else if(e.key === 'ArrowUp' || e.key === 'Up'){
    snakePlayer.dy = -snakePlayer.speed;
    snakePlayer.dx = 0;
  }
  if( (e.key === 'ArrowRight' || e.key === 'Right') && lastXmovement < 0) {
    return;
  }
  else if(e.key === 'ArrowRight' || e.key === 'Right' ){
    snakePlayer.dx = snakePlayer.speed;
    snakePlayer.dy = 0;
  }
  if( (e.key === 'ArrowLeft' || e.key === 'Left') && lastXmovement > 0) {
    return;
  }
  else if(e.key === 'ArrowLeft' || e.key === 'Left'){
    snakePlayer.dx = -snakePlayer.speed;
    snakePlayer.dy = 0;
  }
    
}

function keyReleased(e) {
  
  if (
       e.key === 'ArrowDown' 
    || e.key === 'Down'
    || e.key === 'ArrowUp'
    || e.key === 'Up'
    ) {
    snakePlayer.dy = 0;
  }
  else if(
       e.key === 'ArrowRight' 
    || e.key === 'Right'
    || e.key === 'ArrowLeft' 
    || e.key === 'Left' 
    ) {
      snakePlayer.dx = 0;
  }
  
}

function addNewBodySegmentToSnake() {
  
  snakePlayer.newBody.push( 
    {
      x: snakePlayer.body[0].x ,
      y: snakePlayer.body[0].y
    }
  );
    
}

function updateSnakeBody() {
  
  if( snakePlayer.newBody.length === 0 ) return; 
  if( didSquareCollideWithSqure(snakePlayer.newBody[0], snakePlayer.body[snakePlayer.body.length - 1]) ) {
    snakePlayer.body.push(snakePlayer.newBody[0]);
    snakePlayer.newBody.shift();
  }
  
}

function incrementScoreLocal(snakePlayer) {
  snakePlayer.score += deltaScore;
}

function initGameVariables() {

  snakePlayer = {
    dx: 0,
    dy: 0,
    speed: boxSize,
    size: boxSize,
    score: 0,
    level: 1,
    body:[
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      },
      {
        x: initialPositionX,
        y: initialPositionY
      }
    ],
    newBody:[]
  };

  bugs = [
    {
      x: 0,
      y: 0,
      size: boxSize
    },
    {
      x: 0,
      y: 0,
      size: boxSize
    },
    {
      x: 0,
      y: 0,
      size: boxSize
    }
  ];
  
}

function update(timestamp, handleOnGame, handleScoreGame, handleLevelGame) {
  
  const step = timestamp - lastTimestap;

  if( step < updateRate[snakePlayer.level - 1] || ( snakePlayer.dx === 0 && snakePlayer.dy === 0 ) )
  {
    window.requestAnimationFrame((timestamp) => {
      update(timestamp, handleOnGame, handleScoreGame, handleLevelGame);
    });
    return 0;
  }
  
  lastTimestap = timestamp;
  
  clearCanvas();
  
  // 
  if ( !moveSnake() ) {
    console.log(`Congrats!! Your score is: ${snakePlayer.score}`);
    handleOnGame(false);
    return;
  } 
  
  drawBugs();
  
  drawSnake();
  
  // Check whether the snake ate the bug or not
  const bugIndex = didSnakeEataBug();
  if( bugIndex !== -1 ) {
    generateBug(bugs[bugIndex]);
    addNewBodySegmentToSnake();
    incrementScoreLocal(snakePlayer);
    handleScoreGame(deltaScore);
  }
  
  updateSnakeBody();
  

  // Level up logic
  if( snakePlayer.score === MAX_SCORE[`LEVEL_${snakePlayer.level}`]) {
    console.log('Level up!');
    if( snakePlayer.level === 2 || snakePlayer.level === 3) {
      deleteBug(bugIndex);
    }
    snakePlayer.level += deltaLevel;
    handleLevelGame(deltaLevel);
  }
   
  window.requestAnimationFrame((timestamp) => {
    update(timestamp, handleOnGame, handleScoreGame, handleLevelGame);
  });
}


export function startGame(handleOnGame, handleScoreGame, handleLevelGame) {
  console.log('Snake game is starting...');
  canvas = document.getElementById('snake-canvas');

  ctx = canvas.getContext('2d');

  initGameVariables();

  handleOnGame(true);

  // Bugs initialization
  generateBug(bugs[0]);
  generateBug(bugs[1]);
  generateBug(bugs[2]);
  
  // Game initialization
  drawSnake();
  drawBugs();
  update(0, handleOnGame, handleScoreGame, handleLevelGame);
    
  window.addEventListener('keydown', keyPressed);
  
}

