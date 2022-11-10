import Group from "./Components/Group/Group";
import "./App.css";
import NewGroup from "./Components/NewGroup/NewGroup.js";
import AddPoints from "./Components/AddPoints/AddPoints";

const App = (props) => {
  
  const clickHandler = () => {
    console.log("click done!")
  }

  return <div className="App">
      <h1>Solera Teams</h1>
      <NewGroup />
      <AddPoints />
      <div className="BigDiv">
          <button onClick={clickHandler}>
            <Group name="Group 1" points="15" assignment="2"/>
          </button>
      </div>
      
  </div>
}

export default App;
