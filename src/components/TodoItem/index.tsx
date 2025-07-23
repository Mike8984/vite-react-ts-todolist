import { type FC } from "react";
import type { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";

interface IProps {
    todo: ITodo;
    removeTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}

const TodoItem: FC<IProps> = ({ todo, removeTodo, toggleTodo }) => {
    const classes = [];

    if (todo.completed) {
        classes.push("completed");
    }

    return (
        <div className={styles.root}>
            <div>
                <input
                    type="checkbox"
                    id="completed"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                />
                <h3 className={classes.join(" ")}>
                    {todo.title}
                </h3>
            </div>
            <button
                className={styles.rootDeleteButton}
                onClick={() => removeTodo(todo.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default TodoItem;
