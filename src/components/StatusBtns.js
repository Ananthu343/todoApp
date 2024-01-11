import React from 'react'
import '../App.css';
import List from './List';
import { useState } from 'react';


const StatusBtns = ({allTodos,setAllTodos}) => {
  const [isCompleteScreen, setisCompleteScreen] = useState(false);

  return (
    <>
      <div className="btn-area">
        <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setisCompleteScreen(false)}>Todo</button>
        <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setisCompleteScreen(true)}>Completed</button>
      </div>
      <List allTodos={allTodos} setAllTodos={setAllTodos}  isCompleteScreen={isCompleteScreen} />
    </>
   
  )
}

export default StatusBtns
