import Group from "./Components/Group";

const App = (props) => {
  
  const clickHandler = () => {
    console.log("click done!")
  }

  return <div className="app">

      <h1>Solera Teams</h1>
      <div>
          <div>Groups Component</div>
          <button onClick={clickHandler}>
            <Group name="Group 1" points="15" assignment="2"/>
          </button>
      </div>
  </div>
}

export default App;
