import Group from "./Components/Group/Group";
import GroupCard from "./Components/Group/GroupCard";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/AddPoints";
import GroupDetails from "./Components/GroupDetails/GroupDetails";
import {useState} from 'react';
import Header from "./Components/Header/Header";


const task1 = ["HTML", "React", "JS", "c++"];
const tasksScore1 = [11, 22, 33, 41];
const task2 = ["HTML", "React", "JS", "c++"];
const tasksScore2 = [44, 14, 54, 56];
const task3 = ["HTML", "React", "JS", "c++"];
const tasksScore3 = [77, 33, 76, 99];
const task4 = ["HTML", "React", "JS", "c++"];
const tasksScore4 = [33, 66, 32, 21];
let idNumber

const App = (props) => {
  const clickHandler = () => {
    
  }

  const [isShown, setIsShown] = useState(false);
  const handleClick = event => {
    setIsShown(current => !current);
    idNumber=event.currentTarget.id;
  };

  const addGroupHandler = (group) => {
    console.log(group)
  }

  return <div className="App" id="App">
    <Header />
        <div className="BigDiv" id="BigDiv">
       <button onClick={handleClick} id="1"><GroupCard name="Group 1" points="100" assignment="2"></GroupCard></button>
        <button onClick={handleClick} id="2"><GroupCard name="Group 2" points="100" assignment="2"></GroupCard></button>
        <button onClick={handleClick} id="3"><GroupCard name="Group 3" points="100" assignment="2"></GroupCard></button>
        <button onClick={handleClick} id="4"><GroupCard name="Group 4" points="100" assignment="2"></GroupCard></button>
        </div>
      <div className="ResultsDiv" id="Results">
      <NewGroup onAddGroup={addGroupHandler}/>
      <AddPoints />
{isShown && (
  <div className="ResultsDiv" id="Details">
          {(() => {
        {console.log(idNumber)}
        if (idNumber==="1") {
          return (
            <div><GroupDetails names="Group 1" pointss="95" tasks={task1} tasksScores = {tasksScore1} /></div>
          )
        }  if (idNumber==="2") {
          return (
            <div><GroupDetails names="Group 2" pointss="125" tasks={task2} tasksScores = {tasksScore2} /></div>
          )
        }
        if (idNumber==="3") {
          return (
            <div><GroupDetails names="Group 3" pointss="59" tasks={task3} tasksScores = {tasksScore3} /></div>
          )
        }
        if (idNumber==="4") {
          return (
            <div><GroupDetails names="Group 4" pointss="68" tasks={task4} tasksScores = {tasksScore4} /></div>
          )
        }
      })()}
  </div>
)}
  </div>

</div>
}

export default App;