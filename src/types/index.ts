interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
}

 TaskList {
 : Task[];
}

interface TaskContext {
  tasks: Task[];
  addTask: (task: Task) => void;
  edit: (id: number, task: Task) => void;
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
}