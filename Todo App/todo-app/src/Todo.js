import React from "react";
import "./Todo.css";

const Todo = ({ task, id, handleRemove }) => {
  const removeTodo = () => {
    handleRemove(id);
  };
  return (
    <div className="Todo">
      <p className="Todo-task">{task}</p>
      <button onClick={removeTodo} className="Todo-btn">
        x
      </button>
    </div>
  );
};

export default Todo;
