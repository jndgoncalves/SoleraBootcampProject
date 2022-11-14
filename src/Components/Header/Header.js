import App from "../../App";
import solera from "./solera.svg";
import "./Header.css"


function Header(props){
    const button = JSON.stringify(props.id);

    const clickHandler = () => {
        console.log(button)
    }

return <div className="headerDiv">
    <div className="solera"><img src={solera} alt="solera logo" height="250" width="500" className="soleraImg"></img></div>
    <h1>Solera Teams Scores</h1>
    <div className="sideButtonsDiv">
    <button onClick={clickHandler} id="addGroup" className="sideButtons"> Group </button>
    <button onClick={clickHandler} id="addAssignment" className="sideButtons"> Assignment </button>
    <button onClick={clickHandler} id="addAssignment" className="sideButtons"> Points </button>
    </div>
  </div>
    
}




export default Header;