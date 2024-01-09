import React from 'react'
import '../App.css';


const StatusBtns = ({isCompleteScreen,setisCompleteScreen}) => {
  return (
   <div className="btn-area">
    <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setisCompleteScreen(false)}>Todo</button>
    <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setisCompleteScreen(true)}>Completed</button>
  </div>
  )
}

export default StatusBtns
