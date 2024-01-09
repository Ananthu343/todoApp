import React from 'react'
import { CiEdit } from "react-icons/ci";
import { useState } from 'react';
import { MdOutlineAutoDelete } from "react-icons/md";
import { FaRegCircleCheck } from "react-icons/fa6";
import '../App.css';



const List = ({allTodos, isCompleteScreen, setAllTodos, handleDelete ,handleComplete, completed ,handleDeleteCompleted}) => {
    const [edit, isEdit] = useState(false)
    const [val,setVal] = useState(-1);
    const editStart = (i)=>{
        isEdit(!edit);
        setVal(i);
      }
  return (
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
                  <CiEdit className='edit-icon' onClick={()=> editStart(i)} />
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
  )
}

export default List
