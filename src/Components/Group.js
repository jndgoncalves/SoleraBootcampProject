import './Group.css'

const Group = (props) => {

    const groupName = props.name
    const points = props.points
    const assignmentCompleted = props.assignment

    return <div>
            <div>{groupName}</div>
            <div>Group Points: {points}</div>
            <div>Assignments completed: {assignmentCompleted}</div>
        </div>
}

export default Group;