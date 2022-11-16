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

export default function BigDiv() {

  const clickHandler = () => {

  }

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
    const groupDetail = {
      id: event.currentTarget.id,
      name: event.currentTarget.name,
      points: event.currentTarget.points,
      tasks: {task1},
      taskScore: {tasksScore1}
    };
    return 
    
    {isShown && (
      <div className="ResultsDiv" id="Details">
        <div className="DetailsDiv">
          {/* {map((groupDetail) => (<GroupDetails name={groupDetail.name} points={groupDetail.points} task={groupDetail.task} taskScore={groupDetail.taskScore}/>))} */}
      <GroupDetails
        name={event.currentTarget.name} 
        points={event.currentTarget.points} 
        //assignment={event.currentTarget.assignment}
        task={task1}
        taskScore={tasksScore1}
        />
    </div>
    </div>
          )}
  };

  const addGroupHandler = (group) => {
    console.log(group)
    
  }

  let groupList =[
    {id: 1, name: 'Group 1', points: '100', assignment:'5'},
    {id: 2, name: 'Group 2', points: '150', assignment:'8'},
    {id: 3, name: 'Group 3', points: '130', assignment:'6'},
    {id: 4, name: 'Group 4', points: '95', assignment:'3'}];

  return (
      <div className="App" id="App">
        <div className="BigDiv" id="BigDiv">

          {groupList.map((groupList) => 
          (<button onClick={handleClick} id={groupList.id} key={groupList.id}>
          <Group
            key={groupList.id}
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
                { 
                  /*{groupList.map((groupList) => 
                    (<div className="DetailsDiv">
                    <GroupDetails
                      name={groupList.name} 
                      points={groupList.points} 
                      assignment={groupList.assignment}
                      /></div>
                      ))}*/


                  console.log(idNumber) }
                if (idNumber === "1") {
                  return (
                    <div className="DetailsDiv"><GroupDetails name="Group 1" points="95" task={task1} taskScore={tasksScore1} /></div>
                  )
                } if (idNumber === "2") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 2" pointss="125" tasks={task2} taskScores={tasksScore2} /></div>
                  )
                }
                if (idNumber === "3") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 3" pointss="59" tasks={task3} taskScores={tasksScore3} /></div>
                  )
                }
                if (idNumber === "4") {
                  return (
                    <div className="DetailsDiv"><GroupDetails names="Group 4" pointss="68" tasks={task4} taskScores={tasksScore4} /></div>
                  )
                }
              })()}
            </div>
          )}
        </div>
    </div>
  )
}
