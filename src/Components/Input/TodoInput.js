import { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert("Please add something to-do");
    } else {
      createTodoItem(value);
      setValue(e.target.value);
    }
  };

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="mainInput"
        placeholder="Create todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="mainButton" onClick={handleSubmit}>
        Create
      </button>

    </form>
  );
};

export default TodoInput;
