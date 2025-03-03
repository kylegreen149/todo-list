import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Create Tasks and Remove Them from List Once Completed</h2>
      <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder='Enter a Task...'/>
      <button>Add Task</button>
    </div>
  );
}

export default App;
