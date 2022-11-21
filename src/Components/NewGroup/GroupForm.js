import "./GroupForm.css";
import React, { useState } from 'react'


const GroupForm = (props) => {
    const [enteredName, setEnteredName] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
 

    const submitHandler = (event) => {
        event.preventDefault();

        const groupData = {
            name: enteredName
        }
        props.onSaveGroupData(groupData);
        setEnteredName('');
        
    }

    return <form >
        <div className="textDiv" onSubmit={submitHandler}>
            <h1>Insert your group name</h1><p></p>
            <label className="label">Group name:</label>
            <input type="text" min="1" required="0" onChange={nameChangeHandler} value={enteredName}></input><p></p>
            <button type="submit" className="Button">Add Group</button>
        </div>
    </form>
}

export default GroupForm;