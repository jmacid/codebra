import React, {useEffect} from 'react'; 
import nipplejs from 'nipplejs';
 
/**
 * Documentation: 
 *      https://yoannmoi.net/nipplejs/
 *      https://www.npmjs.com/package/nipplejs
 */

const NippleJoystick = () => {
    
    
    useEffect( () => {
        const options = {
            zone: document.getElementById('zone_joystick'),
            mode: 'static', 
            position: { top: '10%', left: '10%' },
        };
        
        let manager = nipplejs.create(options); 
        
        manager.on('move', (evt, nipple) => {
            console.log(nipple.direction?.angle);
        });
    }, [])
    
    
    
    return (
        <div>
            <div  id="zone_joystick"></div>
        </div>
    );
}


export default NippleJoystick;

