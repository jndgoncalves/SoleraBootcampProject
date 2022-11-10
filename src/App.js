import Group from "./Components/Group/Group";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/addpoints";


const App = (props) => {
  
  const clickHandler = () => {
    console.log("click done!")
  }

  return <div className="App" id="App">
      <h1>Solera Teams Scores</h1>
      <div class="BigDiv" id="BigDiv">
          <button onClick={clickHandler} >
            <Group name="Group 1" points="15" assignment="2"/>
          </button>
          <button onClick={clickHandler}>
            <Group name="Group 2" points="20" assignment="3"/>
          </button>
          <button onClick={clickHandler}>
            <Group name="Group 3" points="150" assignment="7"/>
          </button>
          <button onClick={clickHandler}>
            <Group name="Group 3" points="150" assignment="7"/>
          </button>
          <button onClick={clickHandler}>
            <Group name="Group 3" points="150" assignment="7"/>
          </button>
      </div>
      <NewGroup />
      <AddPoints />
  </div>
}

export default App;
