import { type FC } from "react";
import type { ITodo } from "../../types";
import styles from "./TodoItem.module.scss";
import { useTodos } from "../../store/useTodos";

interface IProps {
  todo: ITodo;
}

const TodoItem: FC<IProps> = ({ todo }) => {
  const toggleTodo = useTodos((state) => state.toggleTodo);
  const removeTodo = useTodos((state) => state.removeTodo);

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
            onChange={() => toggleTodo(todo.id)}
          />
        </div>
        <h3 className={`${styles.title} ${classes.join(" ")}`}>{todo.title}</h3>
      </div>
      <button
        className={styles.deleteButton}
        onClick={() => removeTodo(todo.id)}
      >
        Удалить
      </button>
    </div>
  );
};

export default TodoItem;
