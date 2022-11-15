// import '../../App.css';
import solera from "./solera.svg";
import "./Header.css"
import Popup from "../Popup/Popup.js";
import React, { useState } from 'react'
import NewGroup from '../NewGroup/NewGroup.js';
import AddPoints from "../AddPoints/AddPoints.js";


function Header(){
    

const clickHandler = event => {
        let buttonId = event.currentTarget.id;
        console.log(buttonId);
    }
    const addGroupHandler = (group) => {
      console.log(group)
    }
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopupPoint, setButtonPopupPoint] = useState(false);
return ( 
    <div className="headerDiv">
    <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
    <h1>Solera Teams Scores</h1>
    <div className="sideButtonsDiv">
    <button onClick={() => setButtonPopup(true)} id="addGroup" className="sideButtons" > Group </button>
    <Popup trigger = {buttonPopup} setTrigger={setButtonPopup} id={Popup}>
      <NewGroup onAddGroup={addGroupHandler} />
    </Popup>
    <button onClick={clickHandler} id="addAssignment" className="sideButtons"> Assignment </button>
    <button onClick={() => setButtonPopupPoint(true)} id="addPoints" className="sideButtons"> Points </button>
    <Popup trigger = {buttonPopupPoint} setTrigger={setButtonPopupPoint} id={Popup}>
    <AddPoints />
    </Popup>
    </div>
  </div>);

    
}




export default Header;