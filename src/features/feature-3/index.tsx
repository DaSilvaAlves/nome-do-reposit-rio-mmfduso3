import React, { useState } from 'react';
import { Task } from '../types/index';

const Feature = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTask, setCompletedTask] = useState<Task | null>(null);

  const handleToggleCompleted = (task: Task) => {
    setCompletedTask(task);
    const updatedTasks = tasks.map((t) => (t.id === task.id ? { ...t, completed: !t.completed } : t));
    setTasks(updatedTasks);
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <p>{task.title}</p>
          <p>{task.description}</p>
          <p>Prioridade: {task.priority}</p>
          <p>Concluída: {task.completed ? 'Sim' : 'Não'}</p>
          < onClick={() => handleToggleCompleted(task)}>Con</button>
       div>
      ))}
    </div>
  );
};

export default Feature3;