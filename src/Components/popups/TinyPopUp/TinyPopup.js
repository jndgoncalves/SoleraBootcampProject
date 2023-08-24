import React from 'react'
import "./TinyPopup.css"

function TinyPopup(props) {
    return(props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {/* <button className="close-btn" onClick={() => props.setTrigger(false)}>Yes</button>
                <button className="close-btn" onClick={() => props.setTrigger(true)}>No</button> */}
                { props.children }
            </div>
        </div>
    ) :"";

}

export default TinyPopup