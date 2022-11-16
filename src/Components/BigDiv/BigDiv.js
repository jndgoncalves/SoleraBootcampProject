import React, { useState } from 'react'
import Header from '../Header/Header';
import GroupDetails from '../GroupDetails/GroupDetails';
import Group from '../Group/Group';
import './BigDiv.css';



const task1 = ["HTML", "React", "JS", "c++"];
const tasksScore1 = [11, 22, 33, 41];
const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];
let idNumber
let groupList =[
  {id: 1, name: 'Group 1', points: '100', assignment:'5', tasks:task1, score:tasksScore1},
  {id: 2, name: 'Group 2', points: '150', assignment:'8', tasks:task2, score:tasksScore2},
  {id: 3, name: 'Group 3', points: '130', assignment:'6', tasks:task3, score:tasksScore3},
  {id: 4, name: 'Group 4', points: '95', assignment:'3', tasks:task4, score:tasksScore4}];
export default function BigDiv() {

  const clickHandler = () => {

  }

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
    idNumber=event.currentTarget.id;
    const groupDetail = {
      id: event.currentTarget.id,
      name: event.currentTarget.name,
      points: event.currentTarget.points,
      tasks: {task1},
      taskScore: {tasksScore1}
    };
  };

  const addGroupHandler = (group) => {
    console.log(group)
  }

  return (
      <div className="App" id="App">
        <div className="BigDiv" id="BigDiv">

          {groupList.map((groupList) => 
          (<button onClick={handleClick} id={groupList.id} activeGroup={groupList}>
          <Group
            name={groupList.name} 
            points={groupList.points} 
            assignment={groupList.assignment}
            /></button>
            ))}
    
      </div> 

        <div className="ResultsDiv" id="Results">
          {isShown && (
            <div className="ResultsDiv" id="Details">
              {(() => {
                return (
                <div className="DetailsDiv"><GroupDetails name={groupList[idNumber-1].name} points={groupList[idNumber-1].points} task={groupList[idNumber-1].tasks} taskScore={groupList[idNumber-1].score} /></div>
                )
              })()}
            </div>
          )}
        </div>
    </div>
  )
}
