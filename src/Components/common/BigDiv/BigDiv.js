import React, { useEffect, useState } from 'react'
import './BigDiv.css';
import GroupDetails from '../../groups/GroupDetails/GroupDetails';
import Group from '../../groups/Group/Group';
import Popup from '../../popups/Popup/Popup';


let idNumber;
let groupSelected = {};


export default function BigDiv() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [groupList, setGroupList] = useState([]);

  useEffect(() => {
    (async function call() {
      try {

        const response = await fetch('http://localhost:8081/getAll', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const groups = await response.json();
        setGroupList(groups);
      } catch (error) {
        console.log('Error with fetching data!', error);
      }
    })();
  }, []);




  const handleClick = event => {
    setButtonPopup(true);
    idNumber = parseInt(event.currentTarget.id);
    groupList.forEach(element => {
      if (element.id === idNumber) {
        groupSelected =
        {
          id: element.id,
          groupName: element.name,
          points: element.points,
          assignment: element.assignmentList
        };
      }
    });
  };


  return (
    <>
      <div className="BigDiv" id="BigDiv">

        {groupList.map((groupList) =>
        (<button onClick={handleClick} id={groupList.id + "g"} key={groupList.id}>
          <Group
            key={groupList.id}
            name={groupList.name}
            points={groupList.points}
            //assignment={}
            total={groupList.assignmentList.length}

          /></button>
        ))}
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id={Popup}>
        <GroupDetails
          id={groupSelected.id}
          name={groupSelected.groupName}
          points={groupSelected.points}
          assignment={groupSelected.assignment}
        />
      </Popup>

    </>
  )
}

