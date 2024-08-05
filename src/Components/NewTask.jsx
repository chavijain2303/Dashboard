import React, { useState } from 'react';

const NewTask = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-container">
      <h2 className="task-heading">My Tasks</h2>
      <p className="task-description">
        Here you'll see all your tasks. You can add, update, or remove tasks.
      </p>
      
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
          placeholder="Enter new task"
        />
        <button
          onClick={addTask}
          className="add-task-button"
        >
          Add Task
        </button>
      </div>

      {tasks.length > 0 ? (
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-list-item">
              <input
                type="text"
                value={task}
                onChange={(e) => updateTask(index, e.target.value)}
                className="task-input"
              />
              <button
                onClick={() => removeTask(index)}
                className="remove-task-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-tasks">No tasks available.</p>
      )}
    </div>
  );
};

export default NewTask;
