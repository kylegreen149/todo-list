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

  function handleDeleteTasks(index) {
    setTasks(tasks.filter((_, i) => i !== index))
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
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}
          <button onClick={() => handleDeleteTasks(index)}>Delete Task</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
