import './App.css';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState("light")
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState("")
  const [editIndex, setEditIndex] = useState(null)
  const [editTask, setEditTask] = useState("")

  function handleTasks() {
    if (input.trim()) {
      setTasks([...tasks, input])
      setInput("")
    }
  }

  function handleDeleteTasks(index) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  function handleEditTask(index) {
    setEditIndex(index)
    setEditTask(tasks[index])
  }

  function handleSaveEdit() {
    const updatedTasks = [...tasks]
    updatedTasks[editIndex] = editTask.trim();
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditTask("");
  }

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme}>Use {theme === "light" ? "Dark" : "Light"} Mode</button>
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
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editTask}
                  onChange={(e) => setEditTask(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {task}
                <button onClick={() => handleEditTask(index)}>Edit Task</button>
                <button onClick={() => handleDeleteTasks(index)}>Delete Task</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
