import { Dispatch, FC, FormEvent, SetStateAction } from "react";

import "./Input.css";

interface Properties {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  addTask: ($event: FormEvent) => void;
}

const Input: FC<Properties> = ({ task, setTask, addTask }) => {
  return (
    <form className="Input" onSubmit={ addTask }>
      <input type="text"
             className="Input--Box"
             placeholder="Enter a task~"
             onChange={ ({ target }) => { setTask(target.value); } }
      />
      <button className="Input--Submit" type="submit">Add</button>
    </form>
  );
}

export default Input;