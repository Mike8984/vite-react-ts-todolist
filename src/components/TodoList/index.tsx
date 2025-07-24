import { type FC } from "react";
import type { ITodo } from "../../types";
import TodoItem from "../TodoItem";

interface IProps {
    searchValue: string;
    todos: ITodo[];
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoList: FC<IProps> = ({
    searchValue,
    todos,
    removeTodo,
    toggleTodo,
}) => {
    return (
        <div>
            {!todos.length ? (
                <p>No todos</p>
            ) : (
                todos
                    .filter((item) =>
                        item.title
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())
                    )
                    .map((item) => (
                        <TodoItem
                            todo={item}
                            removeTodo={removeTodo}
                            toggleTodo={toggleTodo}
                        />
                    ))
            )}
        </div>
    );
};

export default TodoList;
