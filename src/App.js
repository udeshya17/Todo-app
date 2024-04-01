import { useState } from "react";
import Todo from "./TaskList";
import TaskInput from "./TaskInput";      
import DateDisplay from "./DateDisplay";  // importing the date format 

function App() {
  const [todos, setTodos] = useState([  // use of hooks
    
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);                           // this implement the new todo task
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].hasCompleted = !newTodos[index].hasCompleted;
    setTodos(newTodos);                         // this implement that the task is completed
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);                       // this removes the task
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