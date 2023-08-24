import "./App.css";
import BigDiv from "./Components/common/BigDiv/BigDiv";
// import Header from "./Components/Header/Header";
import Header from "./Components/layout/Header/Header";

const App = () => {

  return (
    <>
      <div className="App" id="App">
        <Header />
        <BigDiv />
      </div>
    </>
  );
}
export default App;