let canvas;
let ctx;

const boxSize = 20;
const initialPositionX = 0;
const initialPositionY = initialPositionX;
const deltaScore = 10;

const snakePlayer = {
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
}

const bugs = [
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

let lastTimestap = 0;
let updateRate = 100;


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
  // snakePlayer.body[0].x += snakePlayer.dx;
  // snakePlayer.body[0].y += snakePlayer.dy;
  
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
  
  console.log(e);
  
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

function inscrementScore() {
  snakePlayer.score += deltaScore;
}

function update(timestamp) {
  
  const step = timestamp - lastTimestap;

  if( step < updateRate || ( snakePlayer.dx === 0 && snakePlayer.dy === 0 ) )
  {
    window.requestAnimationFrame(update);
    return 0;
  }
  
  lastTimestap = timestamp;
  
  clearCanvas();
  
  // 
  if ( !moveSnake() ) {
    console.log(`Congrats!! Your score is: ${snakePlayer.score}`);
    return;
  } 
  
  drawBugs();
  
  drawSnake();
  
  // Check whether the snake ate the bug or not
  const bugIndex = didSnakeEataBug();
  if( bugIndex !== -1 ) {
    generateBug(bugs[bugIndex]);
    addNewBodySegmentToSnake();
    inscrementScore();
  }
  
  updateSnakeBody();
  
  
  
  // Level 2
  if( snakePlayer.score === 50 && snakePlayer.level === 1) {
    console.log('Level 2');
    updateRate = 75;
    snakePlayer.level += 1;
  }
  // Level 3
  if( snakePlayer.score === 100 && snakePlayer.level === 2) {
    console.log('Level 3');
    updateRate = 70;
    deleteBug(bugIndex);
    snakePlayer.level += 1;
  }
  // Level 4
  if( snakePlayer.score === 200 && snakePlayer.level === 3) {
    console.log('Level 4');
    updateRate = 65;
    deleteBug(bugIndex);
    snakePlayer.level += 1;
  } 
  // Level 5
  if( snakePlayer.score === 300 && snakePlayer.level === 4) {
    console.log('Level 5');
    updateRate = 60;
    snakePlayer.level += 1;
  }
  // Level 6
  if( snakePlayer.score === 350 && snakePlayer.level === 5) {
    console.log('Level 6');
    updateRate = 55;
    snakePlayer.level += 1;
  }
  // Level 7
  if( snakePlayer.score === 400 && snakePlayer.level === 6) {
    console.log('Level 7');
    updateRate = 50;
    snakePlayer.level += 1;
  }
  // Level 8
  if( snakePlayer.score === 450 && snakePlayer.level === 7) {
    console.log('Level 8');
    updateRate = 45;
    snakePlayer.level += 1;
  }
  // Level 9
  if( snakePlayer.score === 500 && snakePlayer.level === 8) {
    console.log('Level 9');
    updateRate = 45;
    snakePlayer.level += 1;
  }
  // Level 10
  if( snakePlayer.score === 550 && snakePlayer.level === 9) {
    console.log('Level 10');
    updateRate = 45;
    snakePlayer.level += 1;
  }
  
  window.requestAnimationFrame(update);
}


export function startGame() {
  console.log('Snake game started');
  canvas = document.getElementById('snake-canvas');

  ctx = canvas.getContext('2d');

  
  
  // Bugs initialization
  generateBug(bugs[0]);
  generateBug(bugs[1]);
  generateBug(bugs[2]);
  
  // Game initialization
  drawSnake();
  drawBugs();
  update();
    
  window.addEventListener('keydown', keyPressed);
  
}
