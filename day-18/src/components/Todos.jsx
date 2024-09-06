import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // const deleteButton = () => {
  //   dispatch(removeTodo(todo.id));
  // };

  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </>
  );
};

export default Todos;
