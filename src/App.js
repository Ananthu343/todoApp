import { useEffect, useState } from 'react';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Title from './components/Title';
import List from './components/List';
import StatusBtns from './components/StatusBtns';
import Inputs from './components/Inputs';

function App() {
  const [isCompleteScreen, setisCompleteScreen] = useState(false);
  const [allTodos, setAllTodos] = useState([]);
  const [newTitle, setnewTitle] = useState("");
  const [newDescription, setnewDescription] = useState("");
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    if (savedTodo) {
      setAllTodos(savedTodo)
    }
    let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodo'));
    if (savedCompletedTodo) {
      setCompleted(savedCompletedTodo)
    }
  }, []);

  const handleAddTodo = () => {
    let newTodoItem = {
      title: newTitle,
      description: newDescription
    }
    let updateTodoList = [...allTodos, newTodoItem];
    setAllTodos(updateTodoList);
    localStorage.setItem('todolist', JSON.stringify(updateTodoList))
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
   console.log("hii");

  return (
    <div className="App">
      <Title />
      <div className="todo-wrapper">
        
        <Inputs newTitle={newTitle} setnewTitle={setnewTitle} newDescription={newDescription} setnewDescription={setnewDescription} handleAddTodo={handleAddTodo} />
        
        <StatusBtns isCompleteScreen={isCompleteScreen} setisCompleteScreen={setisCompleteScreen} />

        <List allTodos={allTodos} isCompleteScreen={isCompleteScreen}  setAllTodos={setAllTodos} handleDelete={handleDelete} handleComplete={handleComplete} completed={completed} handleDeleteCompleted={handleDeleteCompleted}/>

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
    </div>
  );
}

export default App;
