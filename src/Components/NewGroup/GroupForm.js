import "./GroupForm.css";
import React, { useState } from 'react'


const GroupForm = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredPoints, setEnteredPoints] = useState("");
    const [enteredAssignment, setEnteredAssignment] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const pointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    }
    const assignmentChangeHandler = (event) => {
        setEnteredAssignment(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            name: enteredName,
            points: enteredPoints,
            assignment: enteredAssignment
        }
        props.onSaveGroupData(groupData);
        setEnteredName('');
        setEnteredPoints('');
        setEnteredAssignment('');
    }

    return <form onSubmit={submitHandler}>
        <div className="textDiv">
            <div className="labelDiv">Insert your group name</div>
            <label>Group name:</label>
            <input type="text" min="1" required="0" onChange={nameChangeHandler} value={enteredName}></input><p></p>
            <button type="submit">Add Group</button>
        </div>
    </form>
}

export default GroupForm;