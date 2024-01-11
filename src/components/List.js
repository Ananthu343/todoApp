import React, { Fragment } from 'react'
import { CiEdit } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import { MdOutlineAutoDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import '../App.css';


const List = ({ allTodos, setAllTodos, isCompleteScreen }) => {

  const [completed, setCompleted] = useState([]);
  const [edit, isEdit] = useState(false)
  const [val, setVal] = useState(-1);

  useEffect(()=>{
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'));
    if (savedCompletedTodo) {
      setCompleted(savedCompletedTodo)
    }
  },[])

  const editStart = (i) => {
    isEdit(!edit);
    setVal(i);
  }

  const handleDelete = (i) => {
    let reducedTodo = [...allTodos];
    reducedTodo.splice(i, 1);
    setAllTodos(reducedTodo);
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
  }

  const handleDeleteCompleted = (i) => {
    let reducedCompleted = [...completed];
    reducedCompleted.splice(i, 1);
    setCompleted(reducedCompleted);
    localStorage.setItem('completedTodo', JSON.stringify(reducedCompleted));
  }

  const handleComplete = (i) => {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let completedOn = day + "/" + month + "/" + year + " at " + hour + ':' + minutes + ":" + seconds;

    let filteredItem = {
      ...allTodos[i],
      completedOn: completedOn
    }
    let updateCompleted = [...completed, filteredItem];
    setCompleted(updateCompleted);
    localStorage.setItem('completedTodo', JSON.stringify(updateCompleted));
    handleDelete(i);
    toast.success(' Task Completed !!', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <Fragment>
      <div className="todo-list">
        {isCompleteScreen === false && allTodos.map((item, i) => {
          return (
            <div className='todo-list-item' key={i}>
              <div>
                {edit && i === val ?
                  <input value={item.title} onChange={(e) => setAllTodos([...allTodos], allTodos[i].title = e.target.value)} type="text" /> : <h2>{item.title}</h2>
                }
                {edit && i === val ?
                  <input value={item.description} onChange={(e) => setAllTodos([...allTodos], allTodos[i].description = e.target.value)} type="text" /> : <p>{item.description}</p>
                }
              </div>
              <div className='icon-wrapper'>
                <CiEdit className='edit-icon' onClick={() => editStart(i)} />
                <MdOutlineAutoDelete onClick={() => handleDelete(i)} className='icon' />
                <FaRegCircleCheck onClick={() => handleComplete(i)} className='check-icon' />
              </div>
            </div>
          )
        })}

        {isCompleteScreen === true && completed.map((item, i) => {
          return (
            <div className='todo-list-item' key={i}>
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p> <small>Completed on {item.completedOn}</small></p>
              </div>
              <div className='icon-wrapper'>
                <MdOutlineAutoDelete onClick={() => handleDeleteCompleted(i)} className='icon' />
              </div>
            </div>
          )
        })}

      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Fragment>
  )
}

export default List
