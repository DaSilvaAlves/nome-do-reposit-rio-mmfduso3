import React, { useState } from 'react';
import { Task } from '../types/index';

const Feature1 = () =>  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      priority,
      completed: false,
    };
    console.log(newTask);
  };

  return (
 <form onSubmit={}>
      <label>
        Título:
 <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Descrição:
        <textarea value={} onChange={(event) => setDescription(event.target.value)} />
      </label>
      <label>
        Prioridade:
 <select value={priority} onChange={(event) => setPriority(event.target.value)}>
          <option value="">Selecione uma prioridade</option>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</>
        </select>
      </label>
      <button type="submit">Criar Tarefa</button>
    </form>
  );
export default Feature1;