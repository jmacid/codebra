import React, {useEffect} from 'react'; 
import nipplejs from 'nipplejs';
 
/**
 * Documentation: 
 *      https://yoannmoi.net/nipplejs/
 *      https://www.npmjs.com/package/nipplejs
 */

const NippleJoystick = (props) => {
    
  useEffect( () => {
    const options = {
      zone: document.getElementById('zone_joystick'),
      mode: 'static', 
      position: { top: '92%', left: '65%' },
      threshold: 0.5
    };
    
    let manager = nipplejs.create(options); 
      
    manager.on('move', (_evt, nipple) => {
      let joystickDirection;

      switch(nipple.direction?.angle) {
        case 'left':
          joystickDirection = 'ArrowLeft';
          break;
        case 'right':
          joystickDirection = 'ArrowRight';
          break;
        case 'up':
          joystickDirection = 'ArrowUp';
          break;
        case 'down':
          joystickDirection = 'ArrowDown';
            break;
        default:
          console.error('Case not considered: ', nipple.direction?.angle);
      }
      
      window.dispatchEvent(new KeyboardEvent('keydown',{'key': joystickDirection}));

    });
    
  }, [])
  
  
  
  return (
    <div>
      <div  id="zone_joystick"></div>
    </div>
  );
}


export default NippleJoystick;

