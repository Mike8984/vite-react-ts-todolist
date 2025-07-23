import { useState, type ChangeEvent } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import type { ITodo } from "./types";

const App = () => {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState<ITodo[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const addTodo = (title: string) => {
        if (!title.trim()) {
            alert("Values should not be empty");
        }

        const newTodo = {
            id: todos.length + 1,
            title,
            completed: false,
        };

        setTodos((prevTodos) => [...prevTodos, newTodo]);
        setTitle("");
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    };

    return (
        <div className="todo-wrapper">
            <TodoForm
                title={title}
                handleChange={handleChange}
                addTodo={addTodo}
            />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;
