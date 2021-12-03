import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo";

interface TodoReduxState {
  todos: TodoType[];
}

//* 초기 상태
const initialState: TodoReduxState = {
  todos: [],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //* 투두 변경하기
    setTodo(state, action: PayloadAction<TodoType[]>) {
      state.todos = action.payload;
    },
  },
});

export const todoActions = { ...todo.actions };

export default todo;
