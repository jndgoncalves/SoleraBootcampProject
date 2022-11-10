import Group from "./Components/Group";

const App = (props) => {

  return <div className="app">
      <h1>Solera Teams</h1>
      <div>
          <div>Groups Component</div>
          <button onClick={() => {console.log("Clicked!")}}>
            <Group name="Group 1" points="15" assignment="2"/>
          </button>
      </div>
  </div>
}

export default App;
