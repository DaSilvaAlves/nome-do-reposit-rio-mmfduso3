import React, { useState, createContext, useContext } from 'react';
import Feature1 from './features/feature-1';
import Feature2 from './features/feature-2';
import Feature3 from './features/feature-3';
import { Task, TaskContext } from './types/index';

const TaskContext = createContext<TaskContext | null>(null);

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id:, task: Task) => {
    const updatedTasks = tasks.map((t) => (t.id === id ? task : t));
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  constCompleted = (id: number) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task));
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask, toggleCompleted }}>
      <Feature1 />
      <Feature2 />
      <Feature3 />
    </TaskContext.Provider>
  );
};

export default App;