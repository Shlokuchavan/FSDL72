import React, { useState } from 'react';

const TaskItem = ({ task, toggleTask, updatePriority, deleteTask, updateDueDate }) => {
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    updatePriority(task.id, e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
    updateDueDate(task.id, e.target.value);
  };

  return (
    <li className={task.completed ? 'completed' : 'pending'}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <span>{task.text}</span>
      <select value={priority} onChange={handlePriorityChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
      />
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
