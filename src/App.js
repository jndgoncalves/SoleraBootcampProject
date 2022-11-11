import Group from "./Components/Group";
import GroupDetails from "./Components/GroupDetails";
import {useState} from 'react';
const task1 = ["HTML", "React", "JS", "c++"];
const tasksScore1 = [11, 22, 33, 41];
const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
let idNumber
export default function App(){
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);
    idNumber=event.currentTarget.id;
    // console.log(idNumber);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return <div className="app">

      <h1>Solera Teams</h1>
      <div>
          <div>Groups Component</div>
          <button onClick={handleClick} id="1"><Group name="Group 1" points="15" assignment="4"/></button>
          <button onClick={handleClick} id='2'><Group name="Group 2" points="25" assignment="2"/></button>
          <button onClick={handleClick} id='3'><Group name="Group 3" points="5" assignment="3"/></button>
  
       
      </div>
      
      
         

{/* 👇️ show elements on click */}
{isShown && (
  <div>
    <div>Groups Details</div>
   
  
      
      {(() => {
        if (idNumber==1) {
          return (
            <div><GroupDetails names="Group 1" pointss="15" tasks={task1} tasksScores = {tasksScore1} /></div>
          )
        }  if (idNumber==2) {
          return (
            <div><GroupDetails names="Group 2" pointss="25" tasks={task2} tasksScores = {tasksScore2} /></div>
          )
        }
        if (idNumber==3) {
          return (
            <div><GroupDetails names="Group 3" pointss="5" tasks={task3} tasksScores = {tasksScore3} /></div>
          )
        }
        
      })()}
  </div>
)}

{/* 👇️ show component on click */}
{isShown && <Box />}
  </div>
}

function Box() {
  return (
    <div>
      
    </div>
  );
}



