import { Dispatch, FC, FormEvent, SetStateAction, useRef } from "react";

import "./Input.css";

interface Properties {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  addTask: ($event: FormEvent) => void;
}

const Input: FC<Properties> = ({ task, setTask, addTask }) => {
  const input = useRef<HTMLInputElement>(null);
  return (
    <form className="Input"
          onSubmit={ ($event) => {
            addTask($event);
            input.current?.blur();
          }}>
      <input type="text"
             ref={ input}
             className="Input--Box"
             placeholder="Enter a task~"
             onChange={ ({ target }) => { setTask(target.value); } }
      />
      <button className="Input--Submit" type="submit">Add</button>
    </form>
  );
}

export default Input;