import Group from "./Components/Group";
import GroupDetails from "./Components/GroupDetails";
import {useState} from 'react';
const task = ["HTML", "React", "JS", "c++"];
const tasksScore = [11, 22, 33, 41];

export default function App(){
  const [isShown, setIsShown] = useState(false);
  let idNumber
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    idNumber=event.currentTarget.id;
    console.log(idNumber);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return <div className="app">

      <h1>Solera Teams</h1>
      <div>
          <div>Groups Component</div>
          <button onClick={handleClick} id={'1'}><Group name="Group 1" points="15" assignment="4"/></button>
          <button onClick={handleClick} id={'2'}><Group name="Group 2" points="25" assignment="2"/></button>
          <button onClick={handleClick} id={'3'}><Group name="Group 3" points="5" assignment="3"/></button>
  
       
      </div>
      
      
         

{/* 👇️ show elements on click */}
{isShown && (
  <div>
    <div>Groups Details</div>
    <div>{idNumber}</div>
    
      <GroupDetails names="Group 1" pointss="15" tasks={task} tasksScores = {tasksScore} />
  </div>
)}

{/* 👇️ show component on click */}
{isShown && <Box />};
  </div>
}

function Box() {
  return (
    <div>
      
    </div>
  );
}



