import "./GroupForm.css";
import React, {useState} from 'react'
import App from "./../../App.js"


const GroupForm = () => {
    const [enteredName, setEnteredName] =useState("");
    const [enteredPoints, setEnteredPoints] =useState("");
    const [enteredAssignment, setEnteredAssignment] =useState("");
    const newGroupShowing = App.newGroupShowing;
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const pointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    }
    const assignmentChangeHandler = (event) => {
        setEnteredAssignment(event.target.value);
    }

    const submitHandler = (event) =>{
        //event.preventDefault();

        const groupData = {
            name: enteredName,
            points: enteredPoints,
            assignment: enteredAssignment
        }
        console.log(groupData);
        setEnteredName('');
        setEnteredPoints('');
        setEnteredAssignment('');
        newGroupShowing="hidden";
    }

    return <form onSubmit={submitHandler}>
         <div id="textDiv" hidden={newGroupShowing}>
            <label value={enteredName} onChange={nameChangeHandler}>Group name:</label>  
            <input type="text" min="1" required="0"></input>
            <label value={enteredPoints} onChange={pointsChangeHandler}>Points:</label>
            <input type="number" min="0" id="point" required="0"></input>
            <label value={enteredAssignment} onChange={assignmentChangeHandler}>Assignments:</label>
            <input type="number" min="0" id="assignments" required="0"></input>
            <button type="submit">Add Group</button>
        </div>
      </form>
}

export default GroupForm;