import './App.css';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")

  function handleTasks() {
    if (input.trim()) {
      setTasks([...tasks, input])
      setInput("")
    }
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Create Tasks and Remove Them from List Once Completed</h2>
      <input 
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder='Enter a Task...'/>
      <button onClick={handleTasks}>Add Task</button>
    </div>
  );
}

export default App;
