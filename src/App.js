import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [tasks, setTask] = useState([]);

  
  const addTodo = (text) => {
    let id = 1;
    if (tasks.length > 0) {
      id = tasks[0].id + 1;
    }

    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...tasks];
    setTask(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...tasks].filter((todo) => todo.id !== id);
    setTask(updatedTodos);
  };

  const completeTodo = (id) => {

    console.log(id)
    let updatedTodos = tasks.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTask(updatedTodos);
  };

  const calcularCompletados = () => {
    let contador = 0;
    tasks.forEach((task) => {
      if (task.completed) {
        contador += 1;
      }
    });
    return contador;
  };
  const completed = calcularCompletados();

  let sortedTodos = tasks.sort((a, b) => b.important - a.important);
 
 
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <p className="count">{completed}</p>
      <TodoForm addTodo={addTodo} />
      {sortedTodos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
