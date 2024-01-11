import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Title from './components/Title';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className="App">
      <Title />
      <div className="todo-wrapper">
        <Inputs />
      </div>
    </div>
  );
}

export default App;
