import React, { useRef } from 'react'
import '../components/styles.css'

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
      <form
          className="input"
          action=""
          onSubmit={(e) => {
              handleAdd(e);
              inputRef.current?.blur();
          }}
      >
          <input
              ref={inputRef}
              type="text"
              className="input__box"
              placeholder="Enter task."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button className="input_submit" type="submit">
              GO
          </button>
      </form>
  );
}

export default InputField