import { useState } from "react";
import Todo from "./TaskList";
import TaskInput from "./TaskInput";
import DateDisplay from "./DateDisplay";

function App() {
  const [todos, setTodos] = useState([
    
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 text-center mb-4">
        <h1 className="text-white">Todo List</h1>
        <DateDisplay/>
        <TaskInput addTodo={addTodo} />
        {todos.map((todo, index) => {
          return (
            <Todo
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;