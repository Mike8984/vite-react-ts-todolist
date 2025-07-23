import { type FC } from "react";
import type { ITodo } from "../../types";
import TodoItem from "../TodoItem";

interface IProps {
    todos: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: FC<IProps> = ({ todos, removeTodo, toggleTodo }) => {
    return (
        <div>
            {!todos.length ? (
                <p>No todos</p>
            ) : (
                todos.map((item) => (
                    <TodoItem todo={item} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                ))
            )}
        </div>
    );
};

export default TodoList;
