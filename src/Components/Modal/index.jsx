import React, { Component } from 'react';
import './Modal.style.css';


class Modal extends Component {
  
  render() {
    
    const {
      headerTitle = null,
      contentText = null,
      buttonPrimary = null,
      onClickPrimary= () => {},
      buttonSecondary = null,
      onClickSecondary = () => {}      
    } = this.props;
    
    
    return (
      <div className="modalMain">
        
        <div className="modalContainer">
          
          {
            headerTitle &&
            <h1 className="modalHeader">
              {headerTitle}  
            </h1>
          }
          
          {
            contentText &&
            <div className="modalContent">
              {contentText}
            </div>        
          }
          
          {
            ( buttonPrimary || buttonSecondary ) &&
            <div className="modalFooter">
              {
                buttonPrimary &&
                <button
                  className="footerButton footerButtonPrimary"
                  onClick={(e) => onClickPrimary(e)}
                >
                  {buttonPrimary}
                </button>
              }
              {
                buttonSecondary &&
                <button
                  className="footerButton footerButtonSecondary"
                  onClick={(e) => onClickSecondary(e)}
                >
                  {buttonSecondary}
                </button>
              }
            </div>
          }
        </div>
        
      </div>
    )
  }
}


export default Modal;