import "./GroupDetails.css";

const GroupDetails = (props) => {

    const groupName = props.name
    const points = props.points
    const tasks = props.task
    const taskScore = props.taskScore
 
    const listItems = tasks.map((task) =>  
    <p>
    {task}
    </p>);
  
  const listItems2 = taskScore.map((score) =>
    <p>
    {score}
    </p>);


    return <form>
        <div className="textDiv">
          <div className="labelDiv">{groupName} has {points} Points!</div>
            <div className="DetailsDiv">
            <div className="DetailsDiv__list">{listItems}</div>
            <div className="DetailsDiv__points">{listItems2}</div>
            </div>
        </div>
    </form>;
}

export default GroupDetails;