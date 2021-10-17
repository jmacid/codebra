import {MAX_WIDTH} from '../../utils/constants';

const Snake = () => {
  let canvasHeight = window.innerHeight*0.6 - window.innerHeight*0.6 % 20;
  let canvasWidth = window.innerWidth - 40;

  canvasWidth = canvasWidth > MAX_WIDTH ? MAX_WIDTH : canvasWidth;
  
  return (
    <div>
      <canvas id='snake-canvas' width={canvasWidth} height={canvasHeight}></canvas>
    </div>
  )
}

export default Snake;
