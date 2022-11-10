import Group from "./Components/Group";
import GroupDetails from "./Components/GroupDetails";
import {useState} from 'react';
const task = ["HTML", "React", "JS", "c++"];
const tasksScore = [11, 22, 33, 41];

export default function App(){
  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return <div className="app">

      <h1>Solera Teams</h1>
      <div>
          <div>Groups Component</div>
          <button onClick={handleClick}><Group name="Group 1" points="15" assignment="4"/></button>
  
       
      </div>
      
      
         

{/* 👇️ show elements on click */}
{isShown && (
  <div>
    <div>Groups Details</div>
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



