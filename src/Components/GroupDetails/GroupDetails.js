import "./GroupDetails.css";
import React, { useState } from 'react'
import TinyPopup from '../TinyPopUp/TinyPopup';
import { element } from "prop-types";





const GroupDetails = (props) => {
let listName = [];

let listPoint = [];

let listDone = [];

let listButton=[];




    const [change, setChange] = useState(false);
    const [checked, setChecked] = useState(false);
    const groupId=props.id
    const groupName = props.name
    const points = props.points
    const List = props.assignment
    //const [assigns]=props.assignment
    // let index=0;

    const handleChange = (param) => {
      let checkboxVar = document.getElementById(param);
      // let disBtn = document.getElementsByName(!param);
      // disBtn.disabled = true;
      setChange(!change);
      checkboxVar.disabled = change;
    }


    const changeHandler = (id) => {
      //let checkboxVar = document.getElementById(id); 
      setChecked(!checked)
      console.log(checked)
      // setChange(change);
      // checkboxVar.disabled = change;

      const assignData = {
        groupId: groupId,
        assignmentId: id,
        doneStatus: checked
        };
      fetch('http://localhost:8081/editAssignment', 
       {
             method: 'PUT',
             mode: 'cors',
             body: JSON.stringify(assignData),
             headers: {
                  'Content-Type': 'application/json',
                }
          });
      setChecked(!checked);
  }    
  
  List.forEach(element => {
    listName.push(
      <div className="insideDiv" key={element.id}>
      {element.name}
      </div>)
    listPoint.push(
        <div className="insideDiv" key={element.id}>
        {element.point}
        </div>)
    listDone.push(      
        <div className="insideDiv" key={element.id}>
          <input type="checkbox" defaultChecked={element.done} value={element.done} disabled id={element.id} onChange={(event) =>changeHandler(element.id)}></input>
        </div>)
    listButton.push(
      <div className="insideDiv" key={element.id}>
          <input type="button" className="buttonCheck" onClick={(event) => handleChange(element.id)} name={element.id} value="X" ></input>
        </div>)
    });

    

   
    
   
    return <form>
        <div className="textDiv">
          <div className="labelDiv">{groupName} has {points} Points!</div>
            <div className="DetailsDiv">
            <div className="DetailsDiv__list">{listName}</div>
            <div className="DetailsDiv__points">{listPoint}</div>
            <div className="DetailsDiv__check">{listDone}</div>
            <div className="DetailsDiv__button">{listButton}</div>
            </div>
            {/* <div onChange={changeHandler}>
            <input type="radio" value="true" name="changeInput" />
            <input type="radio" value="false" name="changeInput" />
            </div> */}
        </div>
    </form>;
}

export default GroupDetails;

