import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <h2>Create Tasks and Remove Them from List Once Completed</h2>
      <input placeholder='Enter a Task...'></input>
      <button>Add Task</button>
    </div>
  );
}

export default App;
