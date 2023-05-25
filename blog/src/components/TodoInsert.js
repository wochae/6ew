import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ onInsertToggle, onInsertTodo, selectedTodo }) => {
  const [value, setValue] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoInsert;