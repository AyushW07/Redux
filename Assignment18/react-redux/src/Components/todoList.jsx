import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoStatus } from "./todoSlice";

const TodoList = () => {
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (value.trim() !== "") {
      const newTodo = {
        id: Date.now().toString(),
        name: value.trim(),
        status: "pending",
      };
      dispatch(addTodo(newTodo));
      setValue("");
    }
  };

  const handleStatus = (id) => {
    dispatch(todoStatus(id));
  };

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleOnChange} />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul style={{listStyle : "none"}}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name} - Status: {todo.status}
            <button onClick={() => handleStatus(todo.id)}>Toggle Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
