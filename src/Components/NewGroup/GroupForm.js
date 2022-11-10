import "./GroupForm.css";

const groupForm = () => {
    return <form>
         <div id="textDiv" hidden="">
            <label>Group name:</label>  
            <input type="text" min="1" required="0"></input>
            <label>Points:</label>
            <input type="number" min="0" id="point" required="0"></input>
            <label>Assignments:</label>
            <input type="number" min="0" id="assignments" required="0"></input>
            <button type="submit">Add Group</button>
        </div>
       </form>
}

export default groupForm;