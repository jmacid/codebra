

export default class SnakeGame {
  
  constructor(canvasId) {
    this.boxSize = 20;
    this.initialPositionX = 0;
    this.initialPositionY = this.initialPositionX;
    this.deltaScore = 10;
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
  }
  
  start() {
    
    this.ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
    this.ctx.fillRect(100, 100, 100, 100);
    
    document.addEventListener('keydown', (e) => console.log(e))
    
  }
  
}
  
  
