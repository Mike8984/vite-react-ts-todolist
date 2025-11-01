import { create } from "zustand";
import type { ITodo } from "../types";

type TodosState = {
  todos: ITodo[];
  loading: boolean;
  error: string | null;
  addTodo: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

let nextId = 1;

export const useTodos = create<TodosState>((set, get) => ({
  todos: [],
  loading: false,
  error: null,
  addTodo: (title: string) => {
    const newTodo: ITodo = {
      id: nextId++,
      title,
      completed: false,
    };
    set({ todos: [...get().todos, newTodo] });
  },
  toggleTodo: (id: number) =>
    set({
      todos: get().todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }),
  removeTodo: (id: number) =>
    set(({
      todos: get().todos.filter((todo) => todo.id !== id),
    })),
}));
