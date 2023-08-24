// import '../../App.css';
import React, { useState } from 'react'
import solera from "../../../Images/solera.svg";
import "./Header.css"
import Popup from "../../popups/Popup/Popup.js";
import GroupForm from '../../groups/NewGroup/GroupForm.js';
import AddPoints from "../../tasks/AddPoints/AddPoints.js";
import AddAssignmentForm from "../../tasks/AddAssignment/AddAssignmentForm.js";


function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopupPoint, setButtonPopupPoint] = useState(false);
  const [buttonPopupAnotherPoint, setButtonPopupAnotherPoint] = useState(false);

  return (
    <div className="headerDiv">
      <a href="http://www.localhost:3000">
        <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
      </a>
      <h1>Solera Teams Scores</h1>
      <div className="sideButtonsDiv">
        <button onClick={() => setButtonPopup(true)} id="addGroup" className="sideButtons" > Group </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id={Popup}>
          <GroupForm />
        </Popup>
        <button onClick={() => setButtonPopupAnotherPoint(true)} id="addAssignment" className="sideButtons"> Assignments </button>
        <Popup trigger={buttonPopupAnotherPoint} setTrigger={setButtonPopupAnotherPoint} id={Popup}>
          <AddAssignmentForm />
        </Popup>
        <button onClick={() => setButtonPopupPoint(true)} id="addPoints" className="sideButtons"> Points </button>
        <Popup trigger={buttonPopupPoint} setTrigger={setButtonPopupPoint} id={Popup}>
          <AddPoints />
        </Popup>
      </div>
    </div>);


}




export default Header;