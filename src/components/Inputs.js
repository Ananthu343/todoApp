import React from 'react'
import '../App.css';

const Inputs = ({newTitle,setnewTitle,newDescription,setnewDescription, handleAddTodo}) => {
  return (
    <div className='todo-input'>
          <div className='todo-input-item'>
            <label>Title</label>
            <input value={newTitle} onChange={(e) => setnewTitle(e.target.value)} type="text" placeholder='Whats the task title?' />
          </div>
          <div className='todo-input-item'>
            <label>Description</label>
            <input value={newDescription} onChange={(e) => setnewDescription(e.target.value)} type="text" placeholder='Whats the task description?' />
          </div>
          <div className='todo-input-item'>
            <button onClick={handleAddTodo} type='button' className='primaryBtn'>Add</button>
          </div>
    </div>
  )
}

export default Inputs
