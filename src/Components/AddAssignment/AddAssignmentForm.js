import "./AddAssignmentForm.css";
import React, { useState } from 'react';


const addAssignmentForm = (props) => {

    // const [enteredTeam, setEnteredTeam] = useState("");
    // const TeamChangeHandler = (event) => {
    //     setEnteredTeam(event.target.value);
    // };

    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     const groupData = {
    //        team: enteredTeam
    //        };
    //     props.onSaveGroupData(groupData);
    //     setEnteredTeam('');
    // }
        const task2 = ["HTML", "React", "JS", "c++"];

    return<form>
    <div className="textDiv">
        <div className="labelDiv">Add Assignment to group</div>
        <label>Group: </label>
        <form action="#">
        <select name="groups">  
            <option value="1"> Group 1 </option>  
            <option value="2"> Group 2 </option>  
            <option value="3"> Group 3  </option>  
            <option value="4"> Group 4 </option> 
        </select> 
        </form> 
        <label>Assignments: </label><p></p>
        <form>
    <input type="checkbox" name={task2[0]} value="Bike"></input>
    <label for="vehicle1"> {task2[0]}</label>
    <input type="checkbox" name={task2[1]}  value="Car"></input>
    <label for="vehicle2"> {task2[1]}</label>
    <input type="checkbox" name={task2[2]}  value="Boat"></input>
    <label for="vehicle3"> {task2[2]}</label>
    <input type="checkbox" name={task2[3]}  value="Boat"></input>
    <label for="vehicle3"> {task2[3]}</label>
        </form>
         <button type="submit">Add Points</button>
    </div>
</form>;
}

export default addAssignmentForm;