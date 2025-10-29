import { type FC } from "react";
import type { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { removeTodo, toggleTodo } from "../../redux/todos/todoSlice";

interface IProps {
  todo: ITodo;
}

const TodoItem: FC<IProps> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const classes = [];

  if (todo.completed) {
    classes.push("completed");
  }

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id={`todo-${todo.id}`}
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
        </div>
        <h3 className={`${styles.title} ${classes.join(" ")}`}>{todo.title}</h3>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;
