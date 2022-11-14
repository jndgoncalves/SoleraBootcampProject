import Group from "./Components/Group/Group";
import GroupCard from "./Components/Group/GroupCard";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/AddPoints";
import solera from "./solera.svg";



const App = (props) => {

  const newGroupShowing = "hidden";
  const clickAddGroupHandler = () => {
    newGroupShowing = "";
  }
  const clickHandler = () => {
    
  }

  return <div className="App" id="App">
      <div className="headerDiv">
        <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
        <h1>Solera Teams Scores</h1>
        <div className="sideButtonsDiv">
        <button onClick={clickAddGroupHandler} id="addGroup" className="sideButtons"> Group </button>
        <button onClick={clickHandler} id="addAssignment" className="sideButtons"> Assignment </button>
        <button onClick={clickHandler} id="addAssignment" className="sideButtons"> Points </button>
        </div>
      </div>
      
      <div className="BigDiv" id="BigDiv">
        <GroupCard name="Group 1" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 2" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 3" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
        <GroupCard name="Group 4" points="100" assignment="2"></GroupCard>
      </div>
      <div className="ResultsDiv" id="Results">
      <NewGroup />
      <AddPoints />
      </div>
  </div>
}

export default App;