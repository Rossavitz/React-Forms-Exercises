import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = [];

  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  const todo = todos.map(({ id, task, handleRemove }) => (
    <Todo key={id} id={id} task={task} handleRemove={removeTodo} />
  ));

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      {todo}
    </div>
  );
};

export default TodoList;
