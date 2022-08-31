import { FC, FormEvent, useState } from "react";

import "./App.css";

import Task from "./model";

import Input from "./components/Input";
import TaskList from "./components/TaskList";

const App: FC = () => {
  const [task, setTask] = useState<string>(String());
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = ($event: FormEvent): void => {
    $event.preventDefault();
    const $task = task.trim();
    if ($task) {
      setTasks([...tasks, { id: Date.now(), task: $task, isCompleted: false }]);
      setTask(String());
    }
  };

  return (
    <div className="App">
        <h1 className="Heading">Taskify</h1>
        <Input task={ task } setTask={ setTask } addTask={ addTask } />
        <TaskList tasks={ tasks } />
    </div>
  );
}

export default App;
