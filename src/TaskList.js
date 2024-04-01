import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "8px",
        borderRadius: "4px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      className="todo"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          className="form-check-input me-2"
          checked={todo.hasCompleted}
          onChange={() => completeTodo(index)}
          style={{ border: "2px solid #333" }} 
        />
        <label
          style={{
            textDecoration: todo.hasCompleted ? "line-through" : "none",
            marginLeft: "5px",
          }}
        >
          {todo.text}
        </label>
      </div>
      <div>
        {/* <button
          className="btn btn-primary me-2"
          onClick={() => completeTodo(index)}
        >
          Complete
        </button> */}
        <button
          className="btn btn-danger"
          onClick={() => removeTodo(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
