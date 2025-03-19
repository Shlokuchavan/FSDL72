import React, { useState } from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';
import Header from './Header';
import './style.css'; // Ensure this path is correct based on your folder structure


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [filter, setFilter] = useState('all'); // Filter for showing all, completed, or pending tasks

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  };

  const updatePriority = (id, priority) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, priority } : task));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateDueDate = (id, dueDate) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, dueDate } : task));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // Show all tasks by default
  });

  

  return (
    <div className={isDarkMode ? 'dark-mode' : ''}>
      <Header />
      <div className="container">
        <button onClick={toggleTheme}>Toggle Dark Mode</button>

        <AddTask addTask={(newTask) => {
          setTasks([...tasks, { id: Date.now(), text: newTask, completed: false, priority: 'Low', dueDate: '' }]);
        }} />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>

        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          updatePriority={updatePriority}
          deleteTask={deleteTask}
          updateDueDate={updateDueDate}
        />
      </div>
    </div>
  );
};

export default App;
