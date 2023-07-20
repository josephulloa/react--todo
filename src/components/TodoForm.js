import React, { useState } from "react";


export default function TodoForm({addTodo}) {
  const [input, setInput] = useState("");

  const [error, setError]= useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === "") {
      setError(true)
      return;
    }else{
      addTodo(input)
      setInput("")
      setError(false)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Task..."

      />
      <button type="submit" className="todo-button">add task</button>
      {error}
    </form>
  );
} 