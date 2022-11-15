import "./AddPointsForm.css"
import React, { useState } from 'react'

function AddPointsForm(props) {
    const [enteredPoints, setEnteredPoints] = useState("");
    const [enteredTeam, setEnteredTeam] = useState("");
    const [enteredDescription, setEnteredDescription] = useState("");

    const PointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
    };
    const TeamChangeHandler = (event) => {
        setEnteredTeam(event.target.value);
    };
    const DescriptionChangeHandler = (event) => {
        setEnteredDescription(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            points: enteredPoints,
            team: enteredTeam,
            description: enteredDescription
        };
        props.onSaveGroupData(groupData);
        setEnteredPoints('');
        setEnteredTeam('');
        setEnteredDescription('');
    };

    return <form>
        <div id="textDiv" hidden="">
            <label>Number of Points</label>
            <input type="number" min="0" id="point" required="0" onChange={PointsChangeHandler} value={enteredPoints}></input>
            <label>Team</label>
            <input type="text" min="1" id="team" required="0" onChange={TeamChangeHandler} value={enteredTeam}></input>
            <label>Description </label>
            <input type="text" min="0" id="description" required="0" onChange={DescriptionChangeHandler} value={enteredDescription}></input>
            <button type="submit">Add Points</button>
        </div>

    </form>;
}

export default AddPointsForm;