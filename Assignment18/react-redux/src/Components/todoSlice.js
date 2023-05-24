import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const { id, name, status } = action.payload;
      state.push({ id, name, status });
    },
    todoStatus: (state, action) => {
      const todo = state.find((todo) => todo.id == action.payload);
      if (todo) {
        todo.status = todo.status === "pending" ? "completed" : "pending";
      }
    },
  },
});

export const { addTodo, todoStatus } = todoSlice.actions;
export default todoSlice.reducer;
