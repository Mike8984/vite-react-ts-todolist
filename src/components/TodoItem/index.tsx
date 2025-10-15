import { type FC } from "react";
import type { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { removeTodo, toggleTodo } from "../../redux/todos/todoSlice";

interface IProps {
  todo: ITodo;
}

const TodoItem: FC<IProps> = ({ todo }) => {
    const dispatch = useAppDispatch()

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
          onChange={() => dispatch(toggleTodo(todo.id))}
        />
        <h3 className={classes.join(" ")}>{todo.title}</h3>
      </div>
      <button
        className={styles.rootDeleteButton}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
