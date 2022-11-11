import Group from "./Group"
const GroupCard = (props) => {
    
    /* Some button handler to display group info */
    function showGroupInfo(name, points, assignment) {
        return <div>
            <h1>{name}</h1>
            <h2>{points}</h2>
            <h3>{assignment}</h3>
            {/*<DisplayAssignmentsList></DisplayAssignmentsList>*/}
            
        </div>
    }

    return(
        <button onClick={showGroupInfo}>
            <Group name={props.name} points={props.points} assignment={props.assignment}/>
        </button>
    )
}
export default GroupCard