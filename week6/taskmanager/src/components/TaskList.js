import React from 'react';
import TaskItem from './TaskItem';  // Assuming TaskItem is in a components folder

const TaskList = ({ tasks, toggleTask, updatePriority, updateDueDate, deleteTask }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          updatePriority={updatePriority}
          updateDueDate={updateDueDate}  
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
