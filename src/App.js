import React, { useState } from 'react';
import Counter from './SecondTask';
import ThirdTask from './ThirdTask'
function App() {
  const [task, setTask] = useState('');
  const [tasksList, setTasksList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasksList([...tasksList, task.trim()]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasksList = [...tasksList];
    newTasksList.splice(index, 1);
    setTasksList(newTasksList);
  };

  return (
    <div>
        <Counter />
        <ThirdTask/>
      <h1>Tasks List</h1>
      <div>
        <input type="text" value={task} onChange={handleTaskChange} />
        
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ol>
        {tasksList.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
