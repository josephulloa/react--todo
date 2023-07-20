import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

function TodoItem({ todo, removeTodo, completeTodo }) {
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      {todo.text}

      <div className="iconsContainer">
        <RiDeleteBin2Fill
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />
        <input
          type="checkbox" className="check"
          checked={todo.completed}
          onClick={() => completeTodo(todo.id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
