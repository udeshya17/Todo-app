import React, { useState } from "react";

function TaskInput({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();           // it handles the default behaviour of browser used in form

    if (!value) return;

    addTodo(value);
    setValue("");
  };

  return (
    
    <form onSubmit={handleSubmit}>               
      <div className="input-group input-group-lg mb-3"> 
        <input
          type="text"
          className="form-control"
          autoFocus
          value={value}
          placeholder="Enter todo item"
          onChange={(e) => setValue(e.target.value)}   //EventListener is called
        />
      </div>
    </form>
  );
}

export default TaskInput;
