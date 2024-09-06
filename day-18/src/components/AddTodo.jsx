import React, { useState } from "react";
import { addTodo } from "../features/todos/todoSlice";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    setInput(dispatch(addTodo(input)));
    setInput("");
  };
  return (
    <>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default AddTodo;
