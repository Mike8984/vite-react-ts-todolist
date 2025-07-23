import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ITodo } from "../../types";



type ITodoState = {
    list: ITodo[];
};

const initialState: ITodoState = {
    list: [],
};

let nextId = 1;

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.list.push({
                id: nextId++,
                title: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.list.find((t) => t.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        removeTodo: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
