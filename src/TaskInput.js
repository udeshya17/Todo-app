import React, { useState } from "react";

function TaskInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group input-group-lg mb-3"> {/* Added mb-3 for bottom margin */}
        <input
          type="text"
          className="form-control"
          autoFocus
          value={value}
          placeholder="Enter todo item"
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
}

export default TaskInput;
