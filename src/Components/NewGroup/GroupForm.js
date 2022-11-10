import "./GroupForm.css";

const groupForm = () => {
    return <form>
         <div id="textDiv">
            <label for="text">Group name:</label>  
            <input type="text" min="1" required="0"></input>
            <label for="number">Points:</label>
            <input type="number" min="0" id="point" required="0"></input>
            <label for="number">Assignments:</label>
            <input type="number" min="0" id="assignments" required="0"></input>
        </div>
        <div >
            <button type="submit">Add Group</button>
        </div>
    </form>
}

export default groupForm;