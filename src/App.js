import Group from "./Components/Group/Group";
import GroupCard from "./Components/Group/GroupCard";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/AddPoints";
import GroupDetails from "./Components/GroupDetails/GroupDetails";
import {useState} from 'react';
import Header from "./Components/Header/Header";
import ResultsDiv from "./Components/ResultsDiv/ResultsDiv";
// import Card from "./Components/Card/card";


const task1 = ["HTML", "React", "JS", "c++"];
const tasksScore1 = [11, 22, 33, 41];
const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];
let idNumber

const App = () => {
  const newGroupShowing = "hidden";
  const clickAddGroupHandler = () => {
    newGroupShowing = "";
  }
  const clickHandler = () => {
    
  }

  const grupo =[
    {name: 'Group 1', points: '100', assignment:'5'},
    {name: 'Group 2', points: '150', assignment:'8'},
    {name: 'Group 3', points: '130', assignment:'6'},
    {name: 'Group 4', points: '95', assignment:'3'}];

const [isShown, setIsShown] = useState(false);
const handleClick = event => {
setIsShown(current => !current);
idNumber=event.currentTarget.id;
 };

  return <div className="App" id="App">
    <Header />
    {/* <ResultsDiv /> */}
      <div className="BigDiv" id="BigDiv">
      
        <button onClick={handleClick} id="1"><Group name={grupo[0].name} points={grupo[0].points} assignment={grupo[0].assignment}></Group></button>
        <button onClick={handleClick} id="2"><Group name={grupo[1].name} points={grupo[1].points} assignment={grupo[1].assignment}></Group></button>
        <button onClick={handleClick} id="3"><Group name={grupo[2].name} points={grupo[2].points} assignment={grupo[2].assignment}></Group></button>
        <button onClick={handleClick} id="4"><Group name={grupo[3].name} points={grupo[3].points} assignment={grupo[3].assignment}></Group></button>
      
        </div> 
      <div className="ResultsDiv" id="Results">
      <NewGroup />
      <AddPoints />
      {isShown && (
  <div className="ResultsDiv" >
          {(() => {
        {console.log(idNumber)}
        if (idNumber==="1") {
          return (
            <div className="DetailsDiv"><GroupDetails names="Group 1" pointss="95" tasks={task1} tasksScores = {tasksScore1} /></div>
          )
        }  if (idNumber==="2") {
          return (
            <div className="DetailsDiv"><GroupDetails names="Group 2" pointss="125" tasks={task2} tasksScores = {tasksScore2} /></div>
          )
        }
        if (idNumber==="3") {
          return (
            <div className="DetailsDiv"><GroupDetails names="Group 3" pointss="59" tasks={task3} tasksScores = {tasksScore3} /></div>
          )
        }
        if (idNumber==="4") {
          return (
            <div className="DetailsDiv"><GroupDetails names="Group 4" pointss="68" tasks={task4} tasksScores = {tasksScore4} /></div>
          )
        }
      })()}
  </div>
)}
  </div>

</div>
}
export default App;
