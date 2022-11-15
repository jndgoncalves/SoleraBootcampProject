import "./GroupDetails.css";

const GroupDetails = (props) => {

    const groupName = props.name
    const points = props.points
    const tasks = props.task
    const taskScore = props.taskScore
 
    const listItems = tasks.map((task) =>  
    <div>
      <li>{task}</li>
    </div>);
  
  const listItems2 = taskScore.map((score) =>
    <div>
      <li>{score}</li>
    </div>);


    return <div>
            <div>
            <span>{groupName} </span>
            <span>{points} Points</span>
            </div>
            <ul>{listItems}</ul>
            <ul>{listItems2}</ul>
        </div>
}

export default GroupDetails;