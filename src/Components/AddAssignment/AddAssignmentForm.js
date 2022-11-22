import "./AddAssignmentForm.css";
import React, { useState } from 'react';


function AddAssignmentForm(props) {
    const [enteredPoints, setEnteredPoints] = useState("");
    const [enteredName, setEnteredName] = useState("");

    const PointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    };
    const NameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };
    
   
    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            score: enteredPoints,
            task: enteredName,
        };
        props.onSaveGroupData(groupData);
        setEnteredPoints('');
        setEnteredName('');
    };
    return <form>
        <div className="textDiv" onSubmit={submitHandler}>
            <h1>Add assignments to all groups</h1><p></p>
            <label className="label">Name of the assignment: </label>
            <input type="text" min="1" required="0" onChange={NameChangeHandler} value={enteredName}></input><p></p>
            <label className="label">Points: </label>
            <input type="number" min="0" required="0" onChange={PointsChangeHandler} value={enteredPoints}></input><p></p>
            <button type="submit" className="Button">Add Points</button>
        </div>

    </form>;
}

export default AddAssignmentForm;