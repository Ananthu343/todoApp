import React, { Fragment } from 'react'
import StatusBtns from './StatusBtns';
import { useEffect, useState } from 'react';
import '../App.css';
import Message from './Message';

const Inputs = () => {
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setnewTitle] = useState("");
  const [newDescription, setnewDescription] = useState("");
  const [showErr, setshoeErr] = useState(false);

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setAllTodos(savedTodo)
    }
  }, []);

  const handleAddTodo = () => {
    let flag = allTodos.find(obj => obj.title === newTitle);

    if (newTitle.trim() === '') {
      setshoeErr(true);
    } else if (flag) {
      setshoeErr(true);
    } else {
      let newTodoItem = {
        title: newTitle,
        description: newDescription
      }

      let updateTodoList = [...allTodos, newTodoItem];
      setAllTodos(updateTodoList);
      localStorage.setItem('todolist', JSON.stringify(updateTodoList))
    }
  }

  const typing = (e) => {
    setnewTitle(e.target.value)
    setshoeErr(false);
  }

  return (
    <Fragment>
      <div className='todo-input'>
        <div className='todo-input-item'>
          <label>Title</label>
          <input value={newTitle} onChange={(e) => typing(e)} type="text" placeholder='Whats the task title?' />
        </div>
        <div className='todo-input-item'>
          <label>Description</label>
          <input value={newDescription} onChange={(e) => setnewDescription(e.target.value)} type="text" placeholder='Whats the task description?' />
        </div>
        <div className='todo-input-item'>
          <button onClick={handleAddTodo} type='button' className='primaryBtn'>Add</button>
        </div>
      </div>
      {showErr === true ? <Message /> : null}
      <StatusBtns allTodos={allTodos} setAllTodos={setAllTodos} />
    </Fragment>

  )
}

export default Inputs
