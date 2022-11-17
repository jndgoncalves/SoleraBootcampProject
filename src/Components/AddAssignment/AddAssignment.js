import AddAssignmentForm from "./AddAssignmentForm"


const addAssignment = (props) => {
     const saveAddAssignmentDataHandler = (enteredAddAssignmentData) =>{
         const addAssignment = {
            ...enteredAddAssignmentData
         }
         props.onAddAssignment(addAssignment)
     }
   
    return <div>
        <AddAssignmentForm onSaveAddPointsData = {saveAddAssignmentDataHandler}/>
    </div>
}

export default addAssignment;
