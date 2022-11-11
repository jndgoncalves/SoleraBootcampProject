import "./GroupForm.css";
import React, {useState} from 'react'

const GroupForm = () => {
    const [enteredName, setEnteredName] =useState("");
    const [enteredPoints, setEnteredPoints] =useState("");
    const [enteredAssignment, setEnteredAssignment] =useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const pointsChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const assignmentChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const groupData = {
            name: enteredName,
            points: enteredPoints,
            assignment: enteredAssignment
        }
        console.log(groupData);
    }

    return <form onSubmit={submitHandler}>
         <div id="textDiv">
            <label value={enteredName} onChange={nameChangeHandler}>Group name:</label>  
            <input type="text" min="1" required="0"></input>
            <label value={enteredPoints} onChange={pointsChangeHandler}>Points:</label>
            <input type="number" min="0" id="point" required="0"></input>
            <label value={enteredAssignment} onChange={assignmentChangeHandler}>Assignments:</label>
            <input type="number" min="0" id="assignments" required="0"></input>
        </div>
        <div >
            <button type="submit">Add Group</button>
        </div>
    </form>
}

export default GroupForm;